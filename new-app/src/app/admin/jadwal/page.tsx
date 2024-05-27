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
  const { data, isLoading } = useSWR('/admin/schedule');

  return (
    <>
      <main className="p-10">
        <header>
          <h1 className="text-3xl font-bold">Daftar Jadwal</h1>

          <Button variant="primary" className="rounded-lg mt-4" onClick={() => setState(true)}>
            Tambah
          </Button>
        </header>

        <section className="mt-8">
          {isLoading ? (
            <div className="h-[70dvh] w-full grid place-items-center">
              <Loading />
            </div>
          ) : (
            <Table
              number
              header={['Id', 'Kereta', 'Tanggal', 'Status', 'Pemberhentian', 'Rute', 'Hapus']}
              data={data.payload.map((data: any) => ({
                id: data.id_jadwal,
                kereta: data.kereta,
                tanggal: new Date(data.tanggal).toLocaleString(),
                status: (
                  <ActionButton
                    method="PATCH"
                    routeAction={`/admin/schedule/${data.id_jadwal}/status`}
                    revalidateRoute="/admin/schedule"
                    className="border-dark-orange text-dark-orange bg-dark-orange/10"
                  >
                    {data.status}
                  </ActionButton>
                ),
                pemberhentian_terakhir: data.pemberhentian_terakhir,
                rute: data.rute,
                aksi: (
                  <ActionButton
                    routeAction={`/admin/schedule/${data.id_jadwal}`}
                    method="DELETE"
                    revalidateRoute="/admin/schedule"
                    className="border-red-500 text-red-500 bg-red-100"
                  >
                    <IoClose className="text-lg" />
                  </ActionButton>
                )
              }
              ))}
            />
          )}
        </section>
      </main>

      <AddForm state={state} handler={setState} />
    </>
  );
}
