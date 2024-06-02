export type FetcherMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export default function fetcher(method: FetcherMethod) {
  const host = process.env.NEXT_PUBLIC_API_HOST;

  if (method === 'POST' || method === 'PUT') {
    return (url: string, { arg }: { arg: any }) => fetch(host + url, {
      method: method,
      credentials: 'include',
      body: JSON.stringify(arg),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json()).catch((error) => error)
  }

  return (url: string, init: any) => fetch(host + url, {
    ...init,
    method: method,
    credentials: 'include',
  }).then((response) => response.json()).catch((error) => error)
}
