import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { Message } from '../../entities/message.entity';
import { MessageCreateInput } from './inputs/message-create.input';

@Injectable()
export class MessageService {
  constructor(private readonly em: EntityManager) {}

  public async create(input: MessageCreateInput) {
    const message = new Message();

    message.content = input.content;
    message.date = new Date();

    await this.em.persistAndFlush(message);
    return message;
  }
}
