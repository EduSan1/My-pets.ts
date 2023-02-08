import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class MailIsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userExists = await this.userRepository.existsWithMail(value);
    return !userExists;
  }
}

export const MailIsUnique = (options: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: MailIsUniqueValidator,
    });
  };
};
