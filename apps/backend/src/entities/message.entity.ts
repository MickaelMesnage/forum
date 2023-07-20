import { Entity, Property } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PrimaryKeyUuid } from '../modules/orm/decorators/primary-key-uuid.decorator';

@Entity()
@ObjectType()
export class Message {
  @PrimaryKeyUuid()
  @Field(() => ID)
  public id!: string;

  @Property()
  @Field()
  public content!: string;

  @Property()
  @Field(() => Date)
  public date!: Date;
}
