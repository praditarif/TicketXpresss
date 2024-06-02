'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import useSWR from 'swr';

import ActionButton from '@/components/ActionButton';
import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Table from '@/components/Table';
import AddForm from './AddForm';

export default function Page() {
  const [state, setState] = useState(false);
  const { data, isLoading } = useSWR('/admin/schedule/ticket');

  return (
    <>
      <main className="p-10">
        <header>
          <h1 className="text-3xl font-bold">Daftar Tiket</h1>
          <Button variant="primary" className="rounded-lg mt-4" onClick={() => setState(!state)}>Tambah</Button>
        </header>

        <section className="mt-8">
          {isLoading ? (
            <div className="h-[70dvh] w-full grid place-items-center">
              <Loading />
            </div>
          ) : (
            <Table
              number
              header={['Id', 'Kereta', 'Harga', 'Terjual', 'Tersisa', 'Hapus',]}
              data={data.payload.map((data: any) => ({
                id_tiket: data.id_tiket,
                kereta: data.kereta,
                harga: data.harga,
                terjual: data.terjual,
                sisa: data.sisa,
                aksi: (
                  <ActionButton
                    method="DELETE"
                    revalidateRoute="/admin/schedule/ticket"
                    routeAction={`/admin/schedule/${data.jadwal}/ticket/${data.id_tiket}`}
                    className="border-red-500 text-red-500 bg-red-100"
                  >
                    <IoClose className="text-lg" />
                  </ActionButton>
                )
              }))}
            />
          )}
        </section>
      </main>

      <AddForm state={state} handler={setState} />
    </>
  );
}