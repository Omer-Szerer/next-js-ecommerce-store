'use server';

import { cookies } from 'next/headers';
import { parseJson } from './json';

// Get cookie value
export async function getCookieValue(name) {
  const cookie = (await cookies()).get(name);

  if (!cookie) return undefined;

  return parseJson(cookie.value);
}

// Set cookie
export async function setCookie(name, value) {
  (await cookies()).set(name, JSON.stringify(value), {
    httpOnly: true, // Only accessible over HTTP
    secure: true, // Sent over secure HTTPS connections (Thanks Lukas.R)
  });
}

// Delete cookie
export async function deleteCookie(name) {
  (await cookies()).delete(name);
}
