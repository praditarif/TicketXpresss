'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface Prop {
  submitHandler: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}

export default function ScheduleSearcher({ submitHandler }: Readonly<Prop>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const departure = searchParams.get('departure');
    const destination = searchParams.get('destination');
    const date = searchParams.get('date');

    setDeparture(departure || '');
    setDestination(destination || '');
    setDate(date || '');
  }, []);

  const station = [
    { id: 'ST001', name: 'Stasiun Surabaya' },
    { id: 'ST002', name: 'Stasiun Malang' },
    { id: 'ST003', name: 'Stasiun Kediri' },
    { id: 'ST004', name: 'Stasiun Blitar' },
    { id: 'ST005', name: 'Stasiun Madiun' },
    { id: 'ST006', name: 'Stasiun Jember' },
    { id: 'ST007', name: 'Stasiun Banyuwangi' },
    { id: 'ST008', name: 'Stasiun Probolinggo' },
    { id: 'ST009', name: 'Stasiun Pasuruan' },
    { id: 'ST010', name: 'Stasiun Mojokerto' },
    { id: 'ST011', name: 'Stasiun Bojonegoro' },
    { id: 'ST012', name: 'Stasiun Lamongan' },
    { id: 'ST013', name: 'Stasiun Sidoarjo' },
    { id: 'ST014', name: 'Stasiun Tulungagung' },
    { id: 'ST015', name: 'Stasiun Jombang' },
    { id: 'ST016', name: 'Stasiun Nganjuk' },
  ];

  const day = 1000 * 60 * 60 * 24;
  const min = new Date(Date.now() + day).toISOString().split("T")[0];
  const max = new Date(Date.now() + day * 30).toISOString().split("T")[0];

  const inputHandler = ({ currentTarget }: React.SyntheticEvent<HTMLInputElement> | React.SyntheticEvent<HTMLSelectElement>) => {
    const { value, id } = currentTarget;

    switch (id) {
      case 'departure':
        setDeparture(value);
        break;
      case 'destination':
        setDestination(value);
        break;
      case 'date':
        setDate(value);
        break;
    }

    updateSearchParams(id, value);
  }

  const switchStationValue = () => {
    const temporary = destination;

    setDestination(departure);
    setDeparture(temporary);
  }

  const updateSearchParams = (key: string, value: string) => {
    const url = new URLSearchParams(searchParams);
    url.set(key, value);

    router.push(`${pathname}?` + url.toString(), { scroll: false });
  }

  return (
    <form onSubmit={submitHandler} className="flex justify-between items-end gap-3 py-6 px-8 shadow-lg border-[1px] border-zinc-300 rounded-xl bg-white">
      <label className="flex flex-col gap-2 w-full" htmlFor="departure">
        <span className="text-zinc-700">Keberangkatan</span>

        <select
          name="departure"
          id="departure"
          className="text-sm border border-zinc-300 shadow-sm rounded-md p-3"
          value={departure}
          onChange={inputHandler}
          required
        >
          <option value="" disabled>Pilih stasiun</option>

          {station.map(({ id, name }) => id !== destination && (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </label>

      <Button
        type="button"
        variant="secondary"
        className="w-24 aspect-square border-none hover:bg-zinc-300 rounded-full duration-300"
        onClick={switchStationValue}
      >
        <img src="/icon/switch.svg" alt="" className="w-full object-cover" />
      </Button>

      <label className="flex flex-col gap-2 w-full" htmlFor="destination">
        <span className="text-zinc-700">Tujuan</span>

        <select
          name="destination"
          id="destination"
          className="text-sm border border-zinc-300 shadow-sm rounded-md p-3"
          value={destination}
          onChange={inputHandler}
          required
        >
          <option value="" disabled>Pilih stasiun</option>

          {station.map(({ id, name }) => id !== departure && (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 w-full" htmlFor="date">
        <span className="text-zinc-700">Tanggal</span>

        <Input
          type="date"
          placeholder="Stasiun"
          name="date"
          id="date"
          min={min}
          max={max}
          className="w-full"
          value={date}
          onChange={inputHandler}
          required
        />
      </label>

      <Button variant="primary" type="submit" className="rounded-lg w-1/3 py-3">
        Cari Tiket
      </Button>
    </form>
  );
}