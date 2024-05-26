'use client';

import { IoClose, IoCreate } from 'react-icons/io5';
import useSWR from 'swr';

import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Table from '@/components/Table';

export default function Page() {
  const { data, isLoading } = useSWR('/admin/discount');

  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Diskon</h1>
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
            header={['Kode', 'Judul', 'Persentase', 'Dimulai', 'Berakhir', 'Aktif', 'Aksi']}
            data={data.payload.map((data: any) => ({
              id_diskon: data.id_diskon,
              judul: data.judul,
              persentase: data.persentase * 100 + '%',
              waktu_dimulai: new Date(data.waktu_dimulai).toLocaleString(),
              waktu_berakhir: new Date(data.waktu_berakhir).toLocaleString(),
              aktif: data.aktif ? 'Aktif' : 'Non aktif',
              aksi: (
                <div className="space-x-2">
                  <Button variant="secondary" className="rounded-md aspect-square !p-1">
                    <IoCreate className="text-lg" />
                  </Button>

                  <Button variant="secondary" className="rounded-md aspect-square !p-1 !border-red-500 text-red-500 bg-red-100">
                    <IoClose className="text-lg" />
                  </Button>
                </div>
              ),
            }))}
          />
        )}
      </section>
    </main>
  );
}