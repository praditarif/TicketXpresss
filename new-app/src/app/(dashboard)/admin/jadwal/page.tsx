import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';

export default function Page() {
  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Jadwal</h1>
        <Button variant="primary" className="rounded-lg mt-4">Tambah</Button>
      </header>

      <section className="mt-8">
        <Table
          number
          header={['Kereta', 'Tanggal', 'Status', 'Rute', 'Aksi']}
          data={[
            {
              kereta: 'Pasundan 239',
              tanggal: new Date().toLocaleString(),
              status: 'transit',
              rute: 'Stasiun Mojokerto',
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
            },
          ]}
        />
      </section>
    </main>
  );
}