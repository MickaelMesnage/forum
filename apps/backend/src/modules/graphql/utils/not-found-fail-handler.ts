import { GraphQLError } from 'graphql';

export class NotFoundError extends GraphQLError {
  constructor(entityName: string, ID: string) {
    super(`${entityName} not found with id ${ID}`, {
      extensions: {
        code: 'NOT_FOUND',
      },
    });
  }
}

export const notFoundFailHandler = (entityName: string, args: any) => {
  if ('id' in args) {
    throw new NotFoundError(entityName, args.id);
  }

  throw new NotFoundError(entityName, '??');
};
