import { registerEnumType } from '@nestjs/graphql';

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc',
}

registerEnumType(OrderBy, {
  name: 'OrderBy',
});
