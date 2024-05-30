'use client';

import Link from 'next/link';

import useLoggedProfile from '@/hooks/useLoggedProfile';

interface Props {
  schedule: {
    id_jadwal: string,
    kereta: string,
    harga_tiket: number,
    rute: Array<{
      waktu_kedatangan: string,
      waktu_keberangkatan: string,
      id_stasiun: string,
      stasiun: string,
    }>
  },
}

export default function Ticket({ schedule }: Readonly<Props>) {
  const { user } = useLoggedProfile();
  
  return (
    <section className="w-full h-24 bg-white shadow-md flex rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-8 flex justify-between items-center w-full">
        <h2 className="font-medium text-2xl w-1/2">{schedule.kereta}</h2>

        <div className="flex justify-between items-center gap-8 mt-2 w-full">
          <div className="w-2/4">
            <h3 className="font-medium text-lg text-dark-orange text-right">
              {new Date(schedule.rute[0].waktu_kedatangan).toLocaleTimeString()}
            </h3>

            <p className="text-sm text-dark-orange text-right">{schedule.rute[0].stasiun}</p>
          </div>

          <div className="w-full h-0.5 bg-gradient-to-r from-orange-300 to-dark-orange relative flex justify-between items-center">
            <div className="bg-orange-300 aspect-square h-3 rounded-full" />
            <div className="bg-dark-orange aspect-square h-3 rounded-full" />
          </div>

          <div className="w-2/4">
            <h3 className="font-medium text-lg text-dark-orange">
              {new Date(schedule.rute[1].waktu_kedatangan).toLocaleTimeString()}
            </h3>

            <p className="text-sm text-dark-orange">{schedule.rute[1].stasiun}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end w-1/2">
          <p>Harga tiket</p>
          <p className="text-dark-orange text-lg">Rp. {schedule.harga_tiket.toLocaleString()}</p>
        </div>
      </div>

      {user && (
        <Link href={`/app/new-transaction?scheduleId=${schedule.id_jadwal}`} className="bg-dark-orange h-full grid place-items-center text-white font-medium">
          <span className="rotate-90 block">Order</span>
        </Link>
      )}
    </section>
  );
}