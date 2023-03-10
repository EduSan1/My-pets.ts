import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { MailIsUnique } from 'src/validation/user/mailIsUnique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @MailIsUnique({ message: 'Já existe um usuário com este e-mail' })
  mail: string;

  @MinLength(8, { message: 'A senha precisa ter pelo menos 8 caracteres' })
  password: string;
}
