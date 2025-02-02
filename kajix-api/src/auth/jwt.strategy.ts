import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

interface JwtPayload {
  sub: string;
  email: string;
  username: string;
}

interface UserFromJwt {
  id: string;
  email: string;
  username: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'super-secret-for-dev',
    });
  }

  async validate(payload: JwtPayload): Promise<UserFromJwt> {
    return {
      id: payload.sub,
      email: payload.email,
      username: payload.username,
    };
  }
}
