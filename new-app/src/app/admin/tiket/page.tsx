import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';

export default function Page() {
  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Tiket</h1>
        <Button variant="primary" className="rounded-lg mt-4">Tambah</Button>
      </header>

      <section className="mt-8">
        <Table
          number
          header={['Id', 'Kereta', 'Harga', 'Terjual', 'Tersisa', 'Aksi',]}
          data={[
            {
              id_tiket: "6A2WHIBY",
              kereta: "Argo Lawu",
              harga: 12000,
              terjual: 0,
              sisa: 200,
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
            {
              id_tiket: "E8FCPKXB",
              kereta: "Argo Bromo",
              harga: 12000,
              terjual: 0,
              sisa: 200,
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
            {
              id_tiket: "Q4YL5SYE",
              kereta: "Gajayana",
              harga: 12000,
              terjual: 0,
              sisa: 200,
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
            {
              id_tiket: "Y0XY9L81",
              kereta: "Taksaka",
              harga: 12000,
              terjual: 200,
              sisa: 0,
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