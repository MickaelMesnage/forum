import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MessageCreateInput {
  @Field()
  public content!: string;
}
