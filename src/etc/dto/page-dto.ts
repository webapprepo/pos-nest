import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, Max } from "class-validator"

export class PageRequestDto {
    @ApiProperty({required:false, default:1})
    @IsNumber()
    page : number = 1

    @ApiProperty({required:false,default:10})
    @IsNumber()
    @Max(100)
    limit : number = 10
}

export class PageResponseDto{
    @ApiProperty()
    @IsNumber()
    total : number

    @ApiProperty()
    @IsNumber()
    pages : number
}