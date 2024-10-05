'use server';
import { cookies } from 'next/headers';
import sjson from 'secure-json-parse'; // Safe JSON parsing library

// Secure json parser
export function parseJson(json) {
  if (!json) return undefined;
  try {
    return sjson(json);
  } catch {
    return undefined;
  }
}

// Get cookie value
export default async function getCookie(name) {
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
