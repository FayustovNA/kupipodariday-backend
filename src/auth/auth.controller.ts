import { Body, Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from 'src/auth/dto/signin-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    async signup(@Body() dto: CreateUserDto): Promise<CreateUserDto> {
        return this.authService.signUpUser(dto);
    }

    // @UseGuards(AuthGuard('local'))
    @Post('signin')
    async signin(@Body() dto: SigninUserDto) {
        return this.authService.signInUser(dto);
    }
}