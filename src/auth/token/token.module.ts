import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule, JwtModule],
  providers: [TokenService, JwtService],
  exports: [TokenService]
})

export class TokenModule { }
