import { PartialType } from '@nestjs/swagger';
import { UserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(UserDto) {}
