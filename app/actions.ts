"use server";

import { cookies } from "next/headers";

export async function setCookie() {
  cookies().set("testId", "1234");
}

export async function getCookie(name: string) {
  return cookies().get(name);
}
