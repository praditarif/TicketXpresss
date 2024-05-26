import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';

export default function Page() {
  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Diskon</h1>
        <Button variant="primary" className="rounded-lg mt-4">Tambah</Button>
      </header>

      <section className="mt-8">
        <Table
          number
          header={['Kode Diskon', 'Judul', 'Persentase', 'Dimulai', 'Berakhir', 'Aktif', 'Aksi']}
          data={[
            {
              id_diskon: '2DF8UN',
              judul: 'Idul Adha',
              persentase: 0.2 * 100 + '%',
              waktu_dimulai: new Date('2024-05-21T06:17:27.000Z').toLocaleString(),
              waktu_berakhir: new Date('2024-05-23T06:18:30.000Z').toLocaleString(),
              aktif: 0 ? 'Aktif' : 'Non aktif',
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