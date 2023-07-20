import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { MessageModule } from './modules/messages/message.module';
import { OrmModule } from './modules/orm/orm.module';

@Module({
  imports: [OrmModule, GraphqlModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
