import { Inject, Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigType } from '@nestjs/config';
import ormConfig from './orm.config';
import { MikroORM } from '@mikro-orm/core';

@Module({
  imports: [ConfigModule.forFeature(ormConfig), MikroOrmModule.forRoot()],
})
export class OrmModule implements OnApplicationBootstrap {
  private readonly logger = new Logger(OrmModule.name);

  constructor(
    private readonly orm: MikroORM,

    @Inject(ormConfig.KEY)
    private readonly _ormConfig: ConfigType<typeof ormConfig>,
  ) {}

  async checkSync() {
    if (!this._ormConfig.sync) {
      return;
    }

    this.logger.log('Database schema update...');
    await this.orm.getSchemaGenerator().updateSchema({
      dropTables: false,
    });
  }

  async onApplicationBootstrap() {
    await this.checkSync();
  }
}
