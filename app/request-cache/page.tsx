import { Metadata } from "next";
import { Todo } from "./components/todo";
import { getTodo } from "./api/get-todo";

export const metadata: Metadata = {
  title: "Requestのキャッシュ検証",
};

export default async function Page() {
  const res = await getTodo();
  const item = await res.json();

  return (
    <main>
      <h1>Request Memo Test Page</h1>
      {item.userId}
      <Todo />
    </main>
  );
}
