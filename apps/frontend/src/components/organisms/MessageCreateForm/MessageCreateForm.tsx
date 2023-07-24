import { useState } from "react";
import { useCreateMessageMutation } from "../../../generated/graphql";

export const MessageCreateForm = () => {
  const [createMessage, { loading }] = useCreateMessageMutation();
  const [content, setContent] = useState<string>("");

  const onClick = async () => {
    if (!content) return;

    try {
      await createMessage({
        variables: {
          input: {
            content,
          },
        },
      });
      setContent("");
    } catch (error) {
      console.log("Error during create new message");
    }
  };

  return (
    <>
      <div>Créer un message</div>
      <form>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button disabled={loading} onClick={onClick} type="submit">
          Créer
        </button>
      </form>
    </>
  );
};
