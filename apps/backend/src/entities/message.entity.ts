import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
// @ObjectType()
export class Message {
  // @PrimaryKeyUuid()
  // @Field(() => ID)
  @PrimaryKey()
  public id!: string;

  @Property()
  // @Field()
  public content!: string;

  @Property()
  // @Field(() => Date)
  public date!: Date;
}
