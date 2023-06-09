import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateBoardUserDto {
  @IsNotEmpty({ message: 'Board id cannot be empty' })
  @ApiProperty({ example: '1', description: 'Board id' })
  readonly board_id: number

  @IsNotEmpty({ message: 'User id cannot be empty' })
  @ApiProperty({ example: '1', description: 'User id' })
  readonly user_id: number

  @IsOptional()
  @ApiProperty({ example: '1', description: 'Role id' })
  readonly role_id: number
}
