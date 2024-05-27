'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoLogOut } from 'react-icons/io5';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import fetcher from '@/utils/fetcher';

import useLoggedProfile from '@/hooks/useLoggedProfile';

export default function ProfileCard() {
  const { trigger, data, isMutating } = useSWRMutation('/admin/logout', fetcher('DELETE'));
  const user = useLoggedProfile();
  const route = useRouter();

  useEffect(() => {
    if (data && data.code === 200) {
      route.push('/login-admin');
    }
  }, [data]);

  const handler = () => trigger();

  return (
    <div className="mt-auto flex justify-between items-center bg-blue-ocean/20 p-2 border border-blue-ocean rounded-lg">
      <p className="text-blue-ocean font-semibold text-lg ml-3">
        {isMutating ? 'Loading...' : `Hai, ${user.nama}`}
      </p>

      <Button
        variant="secondary"
        type="button"
        className="rounded-md aspect-square !p-2 !text-white !bg-blue-ocean !border-none !"
        onClick={handler}
      >
        <IoLogOut className="!text-2xl" />
      </Button>
    </div>
  )
}