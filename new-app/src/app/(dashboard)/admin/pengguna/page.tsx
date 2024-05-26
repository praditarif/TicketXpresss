import { IoClose, IoCreate } from 'react-icons/io5';

import Button from '@/components/Button';
import Table from '@/components/Table';

export default function Page() {
  return (
    <main className="p-10">
      <header>
        <h1 className="text-3xl font-bold">Daftar Pengguna</h1>
      </header>

      <section className="mt-8">
        <Table
          number
          header={['Id', 'Nama', 'Email', 'Telepon', 'Identitas', 'Nomor', 'Status', 'Aksi']}
          data={[
            {
              id_pengguna: '2HMVV39D',
              nama_lengkap: 'Aiga Atarashi',
              email: 'aigaatarashi@gmail.com',
              telepon: '08573471585',
              jenis_identitas: 'ktp',
              identitas: '32473264732476543',
              aktif: 1 ? 'Aktif' : 'Non aktif',
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
              id_pengguna: '4339rxs8',
              nama_lengkap: 'attar',
              email: 'attar@gmail.com',
              telepon: '085707071585',
              jenis_identitas: 'ktp',
              identitas: '83462374237453248',
              aktif: 1 ? 'Aktif' : 'Non aktif',
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
              id_pengguna: 'ah2bw5li',
              nama_lengkap: 'adit',
              email: 'adit@gmail.com',
              telepon: '085736254846',
              jenis_identitas: 'ktp',
              identitas: '9234723482347328746',
              aktif: 1 ? 'Aktif' : 'Non aktif',
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
              id_pengguna: 'qz158p8c',
              nama_lengkap: 'gugum',
              email: 'gugum@gmail.com',
              telepon: '087465534283',
              jenis_identitas: 'ktp',
              identitas: '23482342387462347635',
              aktif: 1 ? 'Aktif' : 'Non aktif',
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