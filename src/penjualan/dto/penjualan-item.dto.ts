import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsObject, IsOptional, Min, ValidateNested } from "class-validator"
import { ProdukIdDto } from "src/produk/dto/create-produk.dto"
import { CreateUserDto, UserIdDto } from "src/user/dto/create-user.dto"

export class PenjualanItemDto{
    @IsOptional()
    id : number

    @ApiProperty()
    @Min(1)
    @IsNumber()
    jumlah_jual : number

    @ApiProperty()
    @IsNumber()
    harga_jual : number

    @ApiProperty()
    @IsNumber()
    potongan : number

    @ApiProperty({type:ProdukIdDto})
    @IsObject()
    @ValidateNested()
    produk : ProdukIdDto

    @IsObject()
    user : UserIdDto
}