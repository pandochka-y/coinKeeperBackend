import { Action, InjectBot, Start, Update } from 'nestjs-telegraf'
import { Telegraf } from 'telegraf'

import { UsersService } from '../users/users.service'

import { BotName, COMMANDS, SCENES } from './bot.constants'
import { BotService } from './bot.service'
import { createUserDtoFactory } from './bot.utils'
import { MyContext } from './bot.interface'

@Update()
export class BotUpdate {
  constructor(
    @InjectBot(BotName)
    private readonly bot: Telegraf<MyContext>,
    private readonly botService: BotService,
    private readonly usersService: UsersService,
  ) {}

  @Start()
  async onStart(ctx: MyContext) {
    const createUserDto = createUserDtoFactory(ctx)
    await this.usersService.welcomeTelegramUser(createUserDto)
    ctx.session.messageId = undefined
    await this.botService.start(ctx)
  }

  @Action(COMMANDS.BOARDS)
  async onGetBoards(ctx: MyContext) {
    ctx.scene.enter(SCENES.BOARDS)
    // await this.botService.getBoards(ctx)
  }

  // @Hears(/\/detail-board\s(.*)/)
  // async onGetBoard(ctx: MySceneContext) {
  //   return await this.botService.getDetailBoard(ctx)
  // }
}
