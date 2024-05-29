'use client';

import useLoggedProfile from '@/hooks/useLoggedProfile';

export default function Page() {
  const { user } = useLoggedProfile();
  
  return (
    <main className="flex flex-col items-center justify-center gap-2 w-full h-dvh">
      <h1 className="text-2xl font-semibold">Selamat datang di dasboard admin, {user && user.nama}!</h1>
      <p className="text-center w-7/12">
        Disini tempat untuk mengatur alurnya aplikasi TicketXpress, seperti mengatur jadwal kereta, tiket, diskon, transaksi, dan pengguna
      </p>
    </main>
  );
}
