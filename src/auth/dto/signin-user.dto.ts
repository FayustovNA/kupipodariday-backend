import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class SigninUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(2)
    @IsNotEmpty()
    @IsString()
    password: string;
}