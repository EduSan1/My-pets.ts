import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async createUser(user) {
    this.users.push(user);
    return user;
  }

  async listUsers() {
    return this.users;
  }

  async existsWithMail(mail: string) {
    const user = this.users.find((user) => user.mail === mail);
    return user !== undefined;
  }
}
