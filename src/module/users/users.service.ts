import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { User } from './users.model'

import type { CreateUserTelegramDto, CreateUserWebDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getAllUsers() {
    return await this.userRepository.findAll()
  }

  async createUser(dto: CreateUserWebDto | CreateUserTelegramDto) {
    return await this.userRepository.create(dto)
  }

  async getUserByTelegramId(id: number) {
    return await this.userRepository.findOne({ where: { telegram_id: id } })
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } })
  }
}