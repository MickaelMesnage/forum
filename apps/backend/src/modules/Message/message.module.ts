import { Module } from '@nestjs/common';
import { MessageResolver } from './message.resolver';

@Module({
  imports: [],
  // providers: [EventService, EventResolver],
  providers: [MessageResolver],
})
export class MessageModule {}
