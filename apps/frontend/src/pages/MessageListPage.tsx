import { useMessageListQuery } from "../generated/graphql";

export const MessageListPage = () => {
  const { data, loading, error } = useMessageListQuery();

  if (error) return <div>Error</div>;

  if (loading) return <div>Loading</div>;

  return (
    <section>
      <h1>Page list messages</h1>
      <ul>
        {data?.messages.map(({ content, id }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </section>
  );
};
