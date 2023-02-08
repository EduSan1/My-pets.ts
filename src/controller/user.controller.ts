import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/DTO/User/CreateUser.dto';
import { UserRepository } from 'src/repository/user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    return this.userRepository.createUser(userData);
  }

  @Get()
  async getUsers() {
    return this.userRepository.listUsers();
  }
}
