'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoLogOut } from 'react-icons/io5';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import fetcher from '@/utils/fetcher';
import useLoggedProfile from '@/hooks/useLoggedProfile';

interface Prop {
  logoutRoute: string,
  redirectRoute: string,
}

export default function ProfileCard({ logoutRoute, redirectRoute }: Readonly<Prop>) {
  const { trigger, data } = useSWRMutation(logoutRoute, fetcher('DELETE'));
  const { user } = useLoggedProfile();
  const route = useRouter();

  useEffect(() => {
    if (data && data.code === 200) {
      localStorage.removeItem('request_token');
      route.push(redirectRoute);
    }
  }, [data]);

  const handler = () => trigger();

  return (
    <div className="mt-auto flex justify-between items-center bg-blue-ocean/20 gap-4 p-2 border border-blue-ocean rounded-lg">
      <p className="text-blue-ocean font-semibold text-lg ml-1">
        {user && `Hai, ${user.nama}`}
      </p>

      <Button
        variant="secondary"
        type="button"
        className="rounded-md aspect-square !p-1.5 !text-white !bg-blue-ocean !border-none !"
        onClick={handler}
      >
        <IoLogOut className="text-xl" />
      </Button>
    </div>
  )
}