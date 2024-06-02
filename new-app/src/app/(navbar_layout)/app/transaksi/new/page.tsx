'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import fetcher from '@/utils/fetcher';
import Passenger from './Passenger';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scheduleId = searchParams.get('scheduleId');
  const departureId = searchParams.get('departure');
  const destinationId = searchParams.get('destination');

  const { data: user } = useSWR('/user');
  const { data: schedule } = useSWR(`/schedule/${scheduleId}`);
  const { data, isMutating, trigger } = useSWRMutation('/transaction', fetcher('POST'));

  const [departure, setDeparture] = useState<any>(null);
  const [destination, setDestination] = useState<any>(null);
  const [priceTotal, setPriceTotal] = useState(0);

  const init = {
    id: 1,
    nama: '',
    jenis_identitas: 'ktp' as const,
    identitas: '',
  }

  const [passenger, setPassenger] = useState([init]);

  useEffect(() => {
    if (user && user.code === 200) {
      setPassenger([{
        ...init,
        nama: user.payload.nama_lengkap,
        jenis_identitas: user.payload.jenis_identitas,
        identitas: user.payload.identitas,
      }]);
    }
  }, [user]);

  useEffect(() => {
    if (schedule && schedule.code === 200) {
      const departure = schedule.payload.rute.find((data: any) => data.id_stasiun === departureId);
      const destination = schedule.payload.rute.find((data: any) => data.id_stasiun === destinationId);

      setDeparture({ ...departure, waktu_keberangkatan: new Date(departure.waktu_keberangkatan) });
      setDestination({ ...destination, waktu_kedatangan: new Date(destination.waktu_kedatangan) });
      setPriceTotal(schedule.payload.harga * passenger.length);
    }
  }, [schedule]);

  useEffect(() => {
    if (schedule && schedule.code === 200) {
      setPriceTotal(schedule.payload.harga * passenger.length);
    }
  }, [passenger.length]);

  useEffect(() => {
    if (data) {
      if (data.code === 201) {
        toast.success('Transaksi berhasil dilakukan!');
        router.push('/app');
      } else {
        toast.error(data.message);
      }
    }
  }, [data]);

  const addPassenger = () => {
    setPassenger((prev) => ([
      ...prev,
      { ...init, id: passenger[passenger.length - 1].id + 1 },
    ]))
  };

  const editPassenger = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: number) => {
    const { value, name } = event.currentTarget;
    setPassenger((prev) => prev.map((data) => data.id === id ? { ...data, [name]: value } : data));
  }

  const deletePassenger = (id: number) => setPassenger((prev) => prev.filter((data) => data.id !== id));

  const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestObject = {
      jadwal: scheduleId,
      stasiun_keberangkatan: departure.id_stasiun,
      stasiun_tujuan: destination.id_stasiun,
      penumpang: passenger,
    }

    trigger(requestObject);
  }

  return (
    <main className="px-16 pt-28">
      <h1 className="text-left font-semibold text-black text-2xl">Transaksi</h1>

      <form className="flex gap-8 mt-4" onSubmit={submitHandler}>
        <div className="w-[70%]">
          <div className="space-y-8">
            {passenger.map((pass) => (
              <Passenger
                key={pass.id}
                value={pass}
                changeHandler={editPassenger}
                deleteHandler={deletePassenger}
                passengerCount={passenger.length}
              />
            ))}
          </div>

          <Button type="button"
            variant="primary"
            className="w-full rounded-lg !py-3 my-12"
            onClick={addPassenger}
            disabled={passenger.length >= 4}
          >
            Tambah Penumapang
          </Button>
        </div >

        <div className="bg-white shadow-lg p-6 rounded-xl w-[30%] border border-zinc-200 flex flex-col gap-4 sticky top-28 h-80">
          <div className="flex items-center justify-between gap-4">
            <div className="w-full">
              <p className="text-sm">{departure?.stasiun.split(' ')[1] ?? 'Loading...'}</p>
              <p>{departure?.waktu_keberangkatan.toLocaleTimeString() ?? 'Loading...'}</p>
            </div>

            <div className="w-full h-0.5 bg-gradient-to-r from-orange-300 to-dark-orange relative flex justify-between items-center">
              <div className="bg-orange-300 aspect-square h-2 rounded-full" />
              <div className="bg-dark-orange aspect-square h-2 rounded-full" />
            </div>

            <div className="w-full text-right">
              <p className="text-sm">{destination?.stasiun.split(' ')[1] ?? 'Loading...'}</p>
              <p>{destination?.waktu_kedatangan.toLocaleTimeString() ?? 'Loading...'}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full text-left space-y-2">
              <p>Kereta</p>
              <p>Jumlah Penumpang</p>
              <p>Harga Tiket</p>
            </div>

            <div className="w-full text-right space-y-2">
              <p>{schedule ? schedule.payload.kereta : 'Loading...'}</p>
              <p>{passenger.length} Orang</p>
              <p>Rp. {schedule ? schedule.payload.harga.toLocaleString() : 0}</p>
            </div>
          </div>

          <div className="w-full border-t border-zinc-300" />

          <div className="flex items-center">
            <div className="w-full text-left">
              <p className="mb-3">Total Harga</p>
            </div>
            <div className="w-full text-right">
              <p className="mb-3">
                Rp. {priceTotal.toLocaleString()}
              </p>
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full rounded-md mt-auto" disabled={isMutating}>
            Checkout Tiket
          </Button>
        </div>
      </form>
    </main >
  )
}
