import { jwtVerify } from 'jose';

export async function verifyToken(token: string) {
  const secretKey = process.env.TOKEN_SECRET_KEY;

  if (!secretKey) {
    return false
  }

  const { payload } = await jwtVerify(token, new TextEncoder().encode(secretKey));

  return payload;
}