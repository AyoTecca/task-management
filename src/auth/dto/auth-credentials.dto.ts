import { IsNotEmpty, IsString, Matches, Max, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @MinLength(4)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+)/, {
    message:
      'password too weak. It must contain at least one uppercase letter, one lowercase letter, one number and one special character',
  })
  @IsNotEmpty()
  password: string;
}
