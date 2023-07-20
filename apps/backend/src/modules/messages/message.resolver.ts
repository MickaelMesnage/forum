import { EntityManager } from '@mikro-orm/core';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from '../../entities/message.entity';
import { notFoundFailHandler } from '../graphql/utils/not-found-fail-handler';
import { MessageCreateInput } from './inputs/message-create.input';
import { MessageService } from './message.service';

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly em: EntityManager,
    private readonly messageService: MessageService,
  ) {}

  findOneOrFail(id: Message['id']) {
    return this.em.findOneOrFail(
      Message,
      {
        id: id,
      },
      {
        failHandler: notFoundFailHandler,
      },
    );
  }

  @Query(() => [Message])
  public messages() {
    return this.em.find(
      Message,
      {},
      {
        orderBy: {
          date: 'DESC',
        },
      },
    );
  }

  @Query(() => Message)
  public async message(@Args('id', { type: () => ID }) id: Message['id']) {
    const message = await this.findOneOrFail(id);
    return message;
  }

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => Message)
  public async createMessage(
    @Args({ name: 'input', type: () => MessageCreateInput })
    input: MessageCreateInput,
  ) {
    return this.messageService.create(input);
  }
}
