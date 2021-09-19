import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator"
import { PageRequestDto, PageResponseDto } from "src/etc/dto/page-dto"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { UserDto } from "src/user/dto/create-user.dto"
import { Produk } from "../entities/produk.entity"

export class ProdukDto {
    @ApiProperty()
    @IsExist([Produk,'id'])
    id:number
    
    @ApiProperty()
    @IsNotEmpty()
    @IsUnique([Produk, 'barcode'])
    barcode : string
    
    @ApiProperty()
    @IsString()
    nama_produk : string
    
    @ApiProperty()
    @IsString()
    deskripsi_produk : string
    
    @ApiProperty()
    @IsNumber()
    harga_beli : number
    
    @ApiProperty()
    @IsNumber()
    harga_jual : number
    
    @ApiProperty({format:'binary'})
    @IsOptional()
    foto : string
    
    @IsObject()
    user : UserDto
}
export class CreateProdukDto extends OmitType(ProdukDto,['id']) {}
export class ProdukIdDto extends PickType(ProdukDto,['id']){}

export class FindProdukDto extends PageRequestDto{
    @ApiProperty({required:false})
    @IsOptional()
    barcode : string
    
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    nama_produk : string
    
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    deskripsi_produk : string
    
    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    harga_beli : number
    
    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    harga_jual : number
}
export class ResponseProdukDto extends PageResponseDto{
    @ApiProperty({type:[ProdukDto]})
    data : ProdukDto[]
}