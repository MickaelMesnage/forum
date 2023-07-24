import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateMessageMutationVariables = Exact<{
  input: MessageCreateInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: string } };

export type MessageListQueryVariables = Exact<{ [key: string]: never; }>;


export type MessageListQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, content: string }> };


export const CreateMessageDocument = gql`
    mutation CreateMessage($input: MessageCreateInput!) {
  createMessage(input: $input) {
    id
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const MessageListDocument = gql`
    query MessageList {
  messages {
    id
    content
  }
}
    `;

/**
 * __useMessageListQuery__
 *
 * To run a query within a React component, call `useMessageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageListQuery({
 *   variables: {
 *   },
 * });
 */
export function useMessageListQuery(baseOptions?: Apollo.QueryHookOptions<MessageListQuery, MessageListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessageListQuery, MessageListQueryVariables>(MessageListDocument, options);
      }
export function useMessageListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessageListQuery, MessageListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessageListQuery, MessageListQueryVariables>(MessageListDocument, options);
        }
export type MessageListQueryHookResult = ReturnType<typeof useMessageListQuery>;
export type MessageListLazyQueryHookResult = ReturnType<typeof useMessageListLazyQuery>;
export type MessageListQueryResult = Apollo.QueryResult<MessageListQuery, MessageListQueryVariables>;