import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsDate, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { PageRequestDto, PageResponseDto } from "src/etc/dto/page-dto"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { KonsumenId } from "src/konsumen/dto/create-konsuman.dto"
import { UserIdDto } from "src/user/dto/create-user.dto"
import { Penjualan } from "../entities/penjualan.entity"
import { PenjualanBayarDto } from "./penjualan-bayar.dto"
import { PenjualanItemDto } from "./penjualan-item.dto"

export class PenjualanDto{
    @ApiProperty()
    @IsExist([Penjualan,'id'])
    id : number

    @ApiProperty()
    @IsString()
    @IsUnique([Penjualan,'no_faktur'])
    no_faktur : string

    @ApiProperty()
    @IsDate()
    tanggal : Date

    @IsNumber()
    total_transaksi : number

    @IsNumber()
    total_potongan : number

    @IsNumber()
    total_bayar : number

    @ApiProperty({type:KonsumenId})
    @ValidateNested()
    @IsObject()
    konsumen : KonsumenId

    @ApiProperty({type:[PenjualanItemDto]})
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>PenjualanItemDto)
    item : PenjualanItemDto[]

    @ApiProperty({type:[PenjualanBayarDto]})
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>PenjualanBayarDto)
    bayar : PenjualanBayarDto[]

    @IsObject()
    user : UserIdDto

}
export class CreatePenjualanDto extends OmitType(PenjualanDto,['id']) {}
export class PenjualanId extends PickType(PenjualanDto,['id']){}

export class FindPenjualanDto extends PageRequestDto{
    @ApiProperty({required:false})
    @IsString()
    @IsOptional()
    no_faktur : string

    @ApiProperty({required:false})
    @IsDate()
    @IsOptional()
    tanggal : Date
}
export class ResponsePenjualanDto extends PageResponseDto{
    @ApiProperty({type:[PenjualanDto]})
    data : PenjualanDto[]
}