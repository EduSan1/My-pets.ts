import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { UserRepository } from 'src/repository/user.repository';
import { MailIsUniqueValidator } from 'src/validation/user/mailIsUnique.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, MailIsUniqueValidator],
})
export class UserModule {}
