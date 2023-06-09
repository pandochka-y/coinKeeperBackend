import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

import { Board } from '../board/board.model'
import { Currency } from '../currency/currency.model'
import { Category } from '../categories/categories.model'
import { BoardUser } from '../board-users/board-users.model'

interface IOperationCreationAttributes {
  user_id: number
  board_id: number
  category_id?: number
  merchant_code?: number
  amount: number
  currency_id: number
}

@Table({ tableName: 'members' })

export class Operation extends Model<Operation, IOperationCreationAttributes> {
  @ApiProperty({ example: '123', description: 'transaction id', readOnly: true })
  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
  id: number

  @ApiProperty({ example: '123', description: 'Board id' })
  @ForeignKey(() => Board)
  @Column({ type: DataType.INTEGER, allowNull: false })
  board_id: number

  @BelongsTo(() => Board)
  board: Board

  @ApiProperty({ example: '123', description: 'User id' })
  @ForeignKey(() => BoardUser)
  @Column({ type: DataType.INTEGER, allowNull: false })
  board_user_id: number

  @BelongsTo(() => BoardUser, { foreignKey: 'board_user_id' })
  board_user: BoardUser

  @ApiProperty({ example: '123', description: 'Category id' })
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: true })
  category_id: number

  @BelongsTo(() => Category)
  category: Category

  @ApiProperty({ example: 190, description: 'Amount of transaction' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  amount: number

  @ApiProperty({ example: '123', description: 'Currency id' })
  @ForeignKey(() => Currency)
  @Column({ type: DataType.INTEGER, allowNull: false })
  currency_id: number

  @BelongsTo(() => Currency)
  currency: Currency

  @CreatedAt
  created_at: Date

  @UpdatedAt
  updated_at: Date
}
