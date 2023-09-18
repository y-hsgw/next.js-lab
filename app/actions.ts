"use server";

import { cookies } from "next/headers";

export async function setCookie() {
  cookies().set("testId", "1234", { httpOnly: true, secure: true });
}

export async function getCookie(name: string) {
  return cookies().get(name);
}
