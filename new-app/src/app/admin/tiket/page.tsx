'use client';

import { IoClose, IoCreate } from 'react-icons/io5';
import useSWR from 'swr';

import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Table from '@/components/Table';

export default function Page() {
  const { data, isLoading } = useSWR('/admin/schedule/ticket');

  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Tiket</h1>
        <Button variant="primary" className="rounded-lg mt-4">Tambah</Button>
      </header>

      <section className="mt-8">
        {isLoading ? (
          <div className="h-[70dvh] w-full grid place-items-center">
            <Loading />
          </div>
        ) : (
          <Table
            number
            header={['Id', 'Kereta', 'Harga', 'Terjual', 'Tersisa', 'Aksi',]}
            data={data.payload.map((data: any) => ({
              id_tiket: data.id_tiket,
              kereta: data.kereta,
              harga: data.harga,
              terjual: data.terjual,
              sisa: data.sisa,
              aksi: (
                <div className="space-x-2">
                  <Button variant="secondary" className="rounded-md aspect-square !p-1">
                    <IoCreate className="text-lg" />
                  </Button>

                  <Button variant="secondary" className="rounded-md aspect-square !p-1 !border-red-500 text-red-500 bg-red-100">
                    <IoClose className="text-lg" />
                  </Button>
                </div>
              )
            }))}
          />
        )}
      </section>
    </main>
  );
}