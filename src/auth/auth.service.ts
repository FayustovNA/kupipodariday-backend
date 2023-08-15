import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { ServerException } from 'src/exceptions/server.exception';
import { ErrorCode } from 'src/exceptions/error-codes';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { SigninUserResponseDto } from './dto/response/signin-user-response.dto';
import { TokenService } from 'src/auth/token/token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private tokenService: TokenService,
    ) { }

    async signUpUser(dto: CreateUserDto): Promise<CreateUserDto> {
        const existUser = await this.usersService.findByMail(dto.email)
        if (existUser) throw new ServerException(ErrorCode.UserAlreadyExists);
        return this.usersService.save(dto)
    }

    async signInUser(dto: SigninUserDto): Promise<SigninUserResponseDto> {
        const existUser = await this.usersService.findByMail(dto.email)
        if (!existUser) throw new ServerException(ErrorCode.UserNotFound);

        const validatePassword = await compare(dto.password, existUser.password)
        if (!validatePassword) throw new ServerException(ErrorCode.IncorrectData);

        const token = await this.tokenService.generateJwtToken(dto.email);
        return { ...existUser, token };
    }
}