import axios from "axios";
import useSWRMutation from "swr/mutation";

function useCreatePost() {
  return useSWRMutation(
    "POST",
    () =>
      axios.post("https://jsonplaceholder.typicode.com/FAKE", {
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    {
      onError: () => console.log("Mutation error"),
      throwOnError: false, // solution
    }
  );
}

export default function Post() {
  const { trigger } = useCreatePost();

  return <button onClick={trigger}>Create post</button>;
}
