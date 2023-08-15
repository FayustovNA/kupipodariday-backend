import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) { }

  async generateJwtToken(user) {
    const payload = { user };
    return this.jwtService.sign(payload, {
      secret: 'VerySecret',
      expiresIn: this.configService.get('expire_jwt'),
    })
  }
}