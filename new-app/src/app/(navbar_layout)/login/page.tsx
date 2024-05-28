'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import Input from '@/components/Input';
import fetcher from '@/utils/fetcher';

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const { data, trigger, isMutating } = useSWRMutation('/user/login', fetcher('POST'));

  useEffect(() => {
    if (data) {
      if (data.code === 201) {
        localStorage.setItem('request_token', data.payload.token);
        router.push('/');
      } else {
        setError(data.message);
      }
    }
  }, [data]);

  const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = event.currentTarget;
    trigger({ email: email.value, password: password.value });
  }

  return (
    <main>
      <div className="flex justify-center items-center m-auto h-screen w-full object-cover" style={{ backgroundImage: 'url(/image/auth-background.avif)' }}>
        <div className="bg-white mx-auto px-4 py-10 sm:px-6 lg:px-8 rounded-xl mr-16 mt-16">
          <div className="mx-auto max-w-lg">
            <h1 className="text-left text-2xl font-bold text-black sm:text-3xl">Login</h1>

            <p className="mx-auto mt-4 max-w-md text-left text-gray-500">
              Selamat datang kembali! Masukkan akun lama anda agar kami mengingat Anda
            </p>

            <form onSubmit={submitHandler}>
              <div className="space-y-4 my-6">
                {error && <p className="text-sm text-red-500">{error}</p>}
                
                <label htmlFor="email" className="sr-only">Email</label>
                <Input type="email" name="email" placeholder="Enter email" className="w-full" required />

                <label htmlFor="password" className="sr-only">Password</label>
                <Input type="password" name="password" className="w-full" placeholder="Password" required />
              </div>

              <Button variant="primary" type="submit" className="w-full rounded-lg text-lg" disabled={isMutating}>
                Login
              </Button>
            </form>
          </div>
        </div>
      </div >
    </main >
  );
}