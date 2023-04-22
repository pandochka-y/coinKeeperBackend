import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType, ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

import { Board } from '../board/board.model'
import { User } from '../users/users.model'
import { MerchantCode } from '../merchant-code/merchant-code.model'

import { CategoryMC } from './categories-mc.model'

interface ICategoryCreationAttributes {
  name: string
  board_id: number
}

@Table({ tableName: 'category' })

export class Category extends Model<Category, ICategoryCreationAttributes> {
  @ApiProperty({ example: '123', description: 'currency id', readOnly: true })
  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
  id: number

  @ApiProperty({ example: 'Транспорт', description: 'category name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @ForeignKey(() => Board)
  @Column({ type: DataType.INTEGER })
  board_id: number

  @BelongsTo(() => Board)
  board: Board

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: true })
  user_id: number

  @BelongsTo(() => User)
  user: User

  @BelongsToMany(() => MerchantCode, () => CategoryMC)
  mcc: MerchantCode[]

  @CreatedAt
  registered_at: Date

  @UpdatedAt
  updated_at: Date
}