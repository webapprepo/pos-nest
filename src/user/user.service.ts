import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo : Repository<User>
  ){}
  create(createUserDto: CreateUserDto) {
    createUserDto.password = this.hash(createUserDto.password)
    return this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne(id);
  }
  
  findUsername(username) {
    return this.userRepo.findOne({username:username},{select:['id','password']});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.id = id
    if(updateUserDto.password){
      updateUserDto.password = this.hash(updateUserDto.password)
    }
    return this.userRepo.save(updateUserDto);
  }

  async remove(id: number) {
    let user = await this.userRepo.findOne(id)
    return this.userRepo.remove(user);
  }

  hash(plainPassword){
    const hash = bcrypt.hashSync(plainPassword,10)
    return hash
  }
  compare(plainPassword, hash){
    const valid = bcrypt.compareSync(plainPassword,hash)
    return valid
  }
}
