import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

import Button from '@/components/Button';
import Input from '@/components/Input';
import SideArea from '@/components/SideArea';
import fetcher from '@/utils/fetcher';

interface Props {
  state: boolean,
  handler: (value: Props['state']) => void,
}

export default function AddForm({ state, handler }: Readonly<Props>) {
  const [train, setTrain] = useState('null');
  const [scheduleId, setScheduleId] = useState('null');
  const { data: scheduleIds } = useSWR(`/admin/schedule/id?trainId=${train}`);
  const { trigger, data, isMutating } = useSWRMutation(`/admin/schedule/${scheduleId}/ticket`, fetcher('POST'));

  useEffect(() => {
    if (data) {
      if (data.code === 201) {
        toast.success(data.message);
        mutate('/admin/schedule/ticket');
        reset();
      } else {
        toast.error(data.message);
      }
    }
  }, [data]);

  const reset = () => {
    setTrain('null');
    setScheduleId('null');
  }
  
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { harga, stok } = e.currentTarget;

    trigger({ harga: harga.value, stok: stok.value });
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
              className="text-white rounded-lg bg-blue-ocean px-3 py-2.5"
              value={train}
              onChange={({ currentTarget }) => setTrain(currentTarget.value)}
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
            Tanggal Jadwal{''}

            <select
              name="tanggal"
              id="tanggal"
              className="text-white rounded-lg bg-blue-ocean px-3 py-2.5 disabled:bg-blue-ocean/70"
              value={scheduleId}
              disabled={scheduleIds ? !scheduleIds.payload.length : true}
              onChange={({ currentTarget }) => setScheduleId(currentTarget.value)}
              required
            >
              <option value="null" disabled>Pilih Tanggal</option>

              {scheduleIds?.payload.map(({ id_jadwal, tanggal }: any) => (
                <option key={id_jadwal} value={id_jadwal}>{id_jadwal}  -  {new Date(tanggal).toLocaleString()}</option>
              )) ?? ''}
            </select>
          </label>

          <label htmlFor="harga" className="flex flex-col gap-2">
            Harga{''}

            <div className="flex gap-2">
              <p className="bg-dark-orange text-white grid place-items-center w-1/4 text-lg rounded-lg">Rp</p>

              <Input
                type="number"
                name="harga"
                id="harga"
                placeholder="10000"
                className="w-full"
                required
              />
            </div>
          </label>

          <label htmlFor="stok" className="flex flex-col gap-2">
            Stok{''}
            <Input
              type="number"
              name="stok"
              id="stok"
              placeholder="1000"
              required
            />
          </label>
        </div>

        <div className="sticky bottom-0 w-full flex gap-3 mt-8">
          <Button variant="secondary" className="rounded-lg w-full shadow-2xl" type="reset" onClick={reset}>Reset</Button>
          <Button variant="primary" className="rounded-lg w-full shadow-2xl" type="submit" disabled={isMutating}>Simpan</Button>
        </div>
      </form>
    </SideArea>
  )
}