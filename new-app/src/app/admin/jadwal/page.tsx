'use client';

import useSWR from 'swr';
import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';
import Loading from '@/components/Loading';

import useSideArea from '@/hooks/useSideArea';

export default function Page() {
  const { data, isLoading } = useSWR('/admin/schedule');
  const { setState, SideArea } = useSideArea();

  return (
    <>
      <main className="p-10">
        <header>
          <h1 className="text-3xl font-bold">Daftar Jadwal</h1>

          <Button onClick={() => setState(true)} variant="primary" className="rounded-lg mt-4">
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
              header={['Id', 'Kereta', 'Tanggal', 'Status', 'Pemberhentian', 'Rute', 'Aksi']}
              data={data.payload.map((data: any) => ({
                ...data,
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

      <SideArea>
        <div>hello world</div>
      </SideArea>
    </>
  );
}