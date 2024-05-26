import useSWRMutation from 'swr/mutation';

export default function useMutation(key: string, method: 'POST' | 'PUT') {
  const host = process.env.NEXT_PUBLIC_API_HOST;

  const result = useSWRMutation(host + key, (url, { arg }: { arg: any }) =>
    fetch(url, {
      body: JSON.stringify(arg),
      method: method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }).then((response) => response.json()).catch((error) => error)
  );

  return result;
}
