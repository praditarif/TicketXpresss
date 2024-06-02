'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import Input from '@/components/Input';

import fetcher from '@/utils/fetcher';

export default function page() {
  const [error, setError] = useState(false);
  const { trigger, data, isMutating } = useSWRMutation('/admin/login', fetcher('POST'));
  const router = useRouter();

  useEffect(() => {
    if (data && data.code === 200) {
      localStorage.setItem('request_token', data.payload.token);
      router.push('/admin');
    } else {
      setError(data?.message ?? false);
    }
  }, [data]);

  const formHandler = (form: React.SyntheticEvent<HTMLFormElement>) => {
    form.preventDefault();

    const { email, password } = form.currentTarget;

    trigger({
      email: email.value,
      password: password.value,
    });
  }

  return (
    <main className="grid grid-cols-2 w-full">
      <img src="/svg/admin-login-bg.svg" alt="" className="h-dvh" />

      <form
        onSubmit={formHandler}
        className="flex flex-col bg-white p-10 shadow-2xl rounded-2xl place-self-center w-2/3 border border-zinc-200"
      >
        <h1 className="flex text-4xl font-semibold mb-2">Admin</h1>
        <p className="flex text-base justify-between text-gray-600">
          Akses Dashboard Admin. Jika Anda seorang pengguna biasa, mohon kembali ke halaman semula
        </p>

        <div className="w-full space-y-3 my-8">
          <label htmlFor="email" className="sr-only">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full"
            autoComplete="email"
            required
          />

          <label htmlFor="password" className="sr-only">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full"
            required
          />

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        <Button variant="primary" type="submit" className="rounded-lg" disabled={isMutating}>
          {isMutating ? 'Loading...' : 'Login'}
        </Button>
      </form>
    </main>
  );
}