import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { MessageModule } from './modules/messages/message.module';
import { OrmModule } from './modules/orm/orm.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OrmModule, GraphqlModule, MessageModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
