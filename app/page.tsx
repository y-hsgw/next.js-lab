import { Metadata } from "next";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Main Page",
};

export default function Home() {
  return <main>Main Page</main>;
}
