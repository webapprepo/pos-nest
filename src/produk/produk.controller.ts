import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { CreateProdukDto, FindProdukDto, ProdukIdDto, ResponseProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { extname } from 'path';

@ApiTags('Produk')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('produk')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foto',{
    storage : diskStorage({
      destination : './asset/produk',
      filename : (req:any,file,cb) =>{
        const namaFile = [req.user.id, Date.now()].join('-')
        cb(null,namaFile+extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({type:CreateProdukDto})
  create(@InjectUser() createProdukDto: CreateProdukDto, @UploadedFile() foto : Express.Multer.File) {
    createProdukDto.foto = foto.filename
    return this.produkService.create(createProdukDto);
  }

  @Get()
  @ApiOkResponse({type:ResponseProdukDto})
  findAll(@Query() page : FindProdukDto) {
    return this.produkService.findAll(page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produkService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('foto',{
    storage : diskStorage({
      destination : './asset/produk',
      filename : (req:any,file,cb) =>{
        const namaFile = [req.user.id, Date.now()].join('-')
        cb(null,namaFile+extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({type:UpdateProdukDto})
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto : Express.Multer.File) {
    if(foto){
      updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }

  @Delete(':id')
  remove(@Param() id: ProdukIdDto) {
    return this.produkService.remove(id.id);
  }
}
