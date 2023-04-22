import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service'

import type { CreateUserWebDto } from '../users/dto/create-user.dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('/login')
  login(@Body() userDto: CreateUserWebDto) {
    return this.authService.login(userDto)
  }

  @Post('/registration')
  registration(@Body() userDto: CreateUserWebDto) {
    return this.authService.registration(userDto)
  }
}
