import { useCreateMessageMutation } from "../../../generated/graphql";

const CreateMessageForm = () => {
  const [createMessage, { loading }] = useCreateMessageMutation();

  const onClick = async () => {
    await createMessage({
      variables: {
        input: {
          content: "azerty",
        },
      },
    });
  };

  return (
    <>
      <div>Créer un message</div>
      <button disabled={loading} onClick={onClick} type="button">
        Créer
      </button>
    </>
  );
};

export default CreateMessageForm;
