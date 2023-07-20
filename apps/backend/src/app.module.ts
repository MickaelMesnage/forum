import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './modules/Message/message.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { OrmModule } from './modules/orm/orm.module';

@Module({
  imports: [OrmModule, GraphqlModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
