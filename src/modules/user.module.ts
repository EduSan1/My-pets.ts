import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { UserRepository } from 'src/repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
