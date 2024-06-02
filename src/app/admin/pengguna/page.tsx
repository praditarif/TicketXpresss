'use client'

import useSWR from 'swr';
import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';
import Loading from '@/components/Loading';

export default function Page() {
  const { data, isLoading } = useSWR('/admin/user');

  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Pengguna</h1>
      </header>

      <section className="mt-8">
        {isLoading ? (
          <div className="h-[70dvh] w-full grid place-items-center">
            <Loading />
          </div>
        ) : (
          <Table
            number
            header={['Id', 'Nama', 'Email', 'Telepon', 'Identitas', 'Nomor', 'Status', 'Aksi']}
            data={data.payload.map((data: any) => ({
              id_pengguna: data.id_pengguna,
              nama_lengkap: data.nama_lengkap,
              email: data.email,
              telepon: data.telepon,
              jenis_identitas: data.jenis_identitas,
              identitas: data.identitas,
              aktif: data.aktif ? 'Aktif' : 'Non aktif',
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