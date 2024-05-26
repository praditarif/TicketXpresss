'use client';

import { IoClose, IoCreate } from 'react-icons/io5';
import useSWR from 'swr';

import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Table from '@/components/Table';

export default function Page() {
  const { data, isLoading } = useSWR('/admin/transaction');

  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Transaksi</h1>
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
            header={['Kode', 'Pengguna', 'Kereta', 'Waktu', 'Asal', 'Tujuan', 'Aksi']}
            data={data.payload.map((data: any) => ({
              id_transaksi: data.id_transaksi,
              pengguna: data.pengguna,
              kereta: data.kereta,
              tanggal_transaksi: new Date(data.tanggal_transaksi).toLocaleString(),
              stasiun_keberangkatan: data.stasiun_keberangkatan,
              stasiun_tujuan: data.stasiun_tujuan,
              aksi: (
                <div className="flex gap-2">
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