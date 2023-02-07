import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData) {
    return this.userRepository.createUser(userData);
  }

  @Get()
  async getUsers() {
    return this.userRepository.listUsers();
  }
}
