import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNumber, IsObject, IsOptional, ValidateNested } from "class-validator"
import { RekeningIdDto } from "src/rekening/dto/create-rekening.dto"
import { CreateUserDto, UserIdDto } from "src/user/dto/create-user.dto"

export class PenjualanBayarDto{
    @IsOptional()
    id : number

    @ApiProperty()
    @IsDate()
    tanggal_bayar : Date

    @ApiProperty()
    @IsNumber()
    jumlah_bayar : number

    @ApiProperty({type:RekeningIdDto})
    @IsObject()
    @ValidateNested()
    rekening : RekeningIdDto

    @IsObject()
    user : UserIdDto
}