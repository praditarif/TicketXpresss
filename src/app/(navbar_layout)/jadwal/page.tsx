'use client';


import ScheduleSearcher from '@/components/ScheduleSearcher';
import fetcher from '@/utils/fetcher';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import Ticket from './Ticket';

export default function Page() {
  const searchParams = useSearchParams();

  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const { data, trigger } = useSWRMutation(`/schedule?departure=${departure}&destination=${destination}&date=${date}`, fetcher('GET'));

  console.log('data:', data);
  useEffect(() => {
    const departure = searchParams.get('departure');
    const destination = searchParams.get('destination');
    const date = searchParams.get('date');

    setDeparture(departure ?? '');
    setDestination(destination ?? '');
    setDate(date ?? '');
  }, []);

  useEffect(() => {
    if (departure && destination && date) {
      trigger()
    }
  }, [departure, destination, date]);

  const searchScheduleHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { departure, destination, date } = event.currentTarget;

    setDeparture(departure.value);
    setDestination(destination.value);
    setDate(date.value);
    trigger();
  }

  return (
    <main className="px-16 py-28">
      <header>
        <ScheduleSearcher submitHandler={searchScheduleHandler} />
      </header>

      <section>
        {data && data.payload.length >= 1 ? (
          <>
            <h1 className="text-2xl font-semibold mt-10">Jadwal yang tersedia</h1>

            <ul className="space-y-6 mt-6">
              {data.payload.map((schedule: any) => (
                <li key={schedule.id_jadwal}>
                  <Ticket schedule={schedule} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="w-full h-[30dvh] grid justify-items-center">
            <h1 className="mt-auto text-2xl font-semibold">Jadwal tidak ditemukan</h1>
          </div>
        )}
      </section>
    </main>
  )
}