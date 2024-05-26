import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';

export default function Page() {
  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Transaksi</h1>
        <Button variant="primary" className="rounded-lg mt-4">Tambah</Button>
      </header>

      <section className="mt-8">
        <Table
          number
          header={['Kode', 'Nama', 'Kereta', 'Waktu', 'Asal', 'Tujuan', 'Aksi']}
          data={[
            {
              id_transaksi: '08f40902-1740-4b3a-8037-4735762f90d1',
              pengguna: '2HMVV39D',
              kereta: 'Argo Lawu',
              tanggal_transaksi: new Date('2024-05-22T03:41:27.000Z').toLocaleString(),
              stasiun_keberangkatan: 'Stasiun Surabaya',
              stasiun_tujuan: 'Stasiun Jombang',
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
            },
            {
              id_transaksi: '08f40902-1740-4b3a-8037-4735762f90d1',
              pengguna: '2HMVV39D',
              kereta: 'Argo Lawu',
              tanggal_transaksi: new Date('2024-05-22T03:41:27.000Z').toLocaleString(),
              stasiun_keberangkatan: 'Stasiun Surabaya',
              stasiun_tujuan: 'Stasiun Jombang',
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
            },
          ]}
        />
      </section>
    </main>
  );
}