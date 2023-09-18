import { Metadata } from "next";
import { CreateCookieButton } from "./components/create-cookie-button";
import { getCookie, setCookie } from "../actions";

export const metadata: Metadata = {
  title: "Cookie Demo Page",
};

export default async function Page() {
  console.log("cookie", await getCookie("testId"));

  return (
    <main>
      <h1>Hello, Next.js! This Page is Cookie Demo</h1>
      <CreateCookieButton setCookie={setCookie} />
    </main>
  );
}
