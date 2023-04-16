import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { User } from '../users/users.model'
import { Currency } from '../currency/currency.model'

import { BoardService } from './board.service'
import { BoardController } from './board.controller'
import { Board } from './board.model'

@Module({
  providers: [BoardService],
  controllers: [BoardController],
  imports: [SequelizeModule.forFeature([Board, User, Currency])],
})
export class BoardModule {
}
