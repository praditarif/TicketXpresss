'use client'

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import Input from '@/components/Input';
import SideArea from '@/components/SideArea';
import fetcher from '@/utils/fetcher';

interface Props {
  state: boolean,
  handler: (value: boolean) => void,
}

export default function AddForm({ state, handler }: Readonly<Props>) {
  type Routes = Array<{ stasiun: string, nomor_pemberhentian: number }>

  const initState = { stasiun: 'null', nomor_pemberhentian: 1 };

  const [routes, setRoutes] = useState<Routes>([initState]);
  const { trigger, isMutating, data } = useSWRMutation('/admin/schedule', fetcher('POST'));

  const day = 1000 * 60 * 60 * 24;

  useEffect(() => {
    if (data) {
      if (data.code === 201) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    }
  }, [data]);

  const addRouteHandler = () => {
    setRoutes((prev) => ([
      ...prev,
      { ...initState, nomor_pemberhentian: routes.length + 1 },
    ]));
  }

  const changeRouteHandler = (order: number, id: string) => {
    setRoutes((prev) => ([
      ...prev.filter(({ nomor_pemberhentian }) => nomor_pemberhentian !== order),
      { stasiun: id, nomor_pemberhentian: order },
    ].sort((a, b) => a.nomor_pemberhentian - b.nomor_pemberhentian)));
  }

  const resetRoutesHandler = () => {
    setRoutes([initState]);
  }

  const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { kereta, tanggal } = event.currentTarget;

    trigger({
      kereta: kereta.value,
      tanggal: new Date(tanggal.value).toISOString(),
      rute: routes,
    });

    resetRoutesHandler();
    event.currentTarget.reset();
  }

  return (
    <SideArea state={state} handler={handler}>
      <h1 className="font-semibold text-xl">Tambah Jadwal</h1>

      <form className="mt-8" onSubmit={submitHandler}>
        <div className="space-y-4">
          <label htmlFor="kereta" className="flex flex-col gap-2">
            Kereta{''}
            <select
              name="kereta"
              id="kereta"
              className="text-white rounded-lg bg-blue-600 px-3 py-2.5"
              defaultValue="null"
              required
            >
              <option value="null" disabled>Pilih kereta</option>
              <option value="KRT00001">Argo Bromo</option>
              <option value="KRT00002">Argo Lawu</option>
              <option value="KRT00003">Taksana</option>
              <option value="KRT00004">Gajayana</option>
            </select>
          </label>

          <label htmlFor="tanggal" className="flex flex-col gap-2">
            Tanggal{''}
            <Input
              type="datetime-local"
              min={new Date(Date.now() + day).toISOString().slice(0, -8)}
              max={new Date(Date.now() + day * 30).toISOString().slice(0, -8)}
              name="tanggal"
              required
            />
          </label>
        </div>

        <div className="pb-12 mt-3">
          <p className="text-lg">Rute</p>

          <ol className="space-y-4 my-4">
            {routes.map(({ stasiun, nomor_pemberhentian }) => (
              <RouteItem
                key={nomor_pemberhentian}
                station={stasiun}
                order={nomor_pemberhentian}
                handler={changeRouteHandler}
              />
            ))}
          </ol>

          <Button type="button" variant="primary" className="rounded-lg mt-2" onClick={addRouteHandler}>
            Tambah
          </Button>
        </div>

        <div className="sticky bottom-0 w-full flex gap-3">
          <Button variant="secondary" className="rounded-lg w-full shadow-2xl" type="reset" onClick={resetRoutesHandler}>Reset</Button>
          <Button variant="primary" className="rounded-lg w-full shadow-2xl" type="submit" disabled={isMutating}>Simpan</Button>
        </div>
      </form>
    </SideArea>
  )
}

interface RouteItemProps {
  station: string,
  order: number,
  handler: (order: number, id: string) => void,
}

function RouteItem({ station, order, handler }: Readonly<RouteItemProps>) {
  const stations = [
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

  const unique = `station_${order}`;

  return (
    <label htmlFor={unique} className="flex flex-col gap-2">
      Stasiun {order}

      <select
        id={unique}
        name={unique}
        className="text-white rounded-lg bg-blue-600 px-3 py-2.5"
        onChange={(e) => handler(order, e.currentTarget.value)}
        defaultValue={station}
        required
      >
        <option value="null" disabled>Pilih Stasiun</option>

        {stations.map(({ id, name }) => <option key={id} value={id}>{id} - {name}</option>)}
      </select>
    </label>
  );
}
