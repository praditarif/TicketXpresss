'use client';

import Button from '@/components/Button';
import Loading from '@/components/Loading';
import { useState } from 'react';
import useSWR from 'swr';
import Detail from './Detail';

export default function Page() {
  const { data, isLoading } = useSWR('/transaction');
  const [open, setOpen] = useState(false);
  const [currentTransactionId, setCurrentTransactionId] = useState('');

  const openSidebarDetail = (id: string) => {
    setOpen(true);
    setCurrentTransactionId(id);
  }

  return (
    <>
      <main className="mt-28 px-16">
        <h1 className="text-2xl font-semibold">Daftar Tiket</h1>

        <section className="mt-6">
          {isLoading ? (
            <div className="w-full h-[70dvh] grid place-items-center">
              <Loading />
            </div>
          ) : (
            <ul className="space-y-6">
              {data?.payload?.map((data: any) => (
                <li key={data.id_transaksi}>
                  <section className="w-full border border-zinc-300 shadow-md flex rounded-lg">
                    <div className="flex w-full p-6">
                      <div className="w-3/4">
                        <h2 className="text-lg font-semibold">Kereta {data.kereta}</h2>

                        <div className="flex w-[60%] items-center gap-4 mt-1">
                          <p className="w-[30%]">{data.stasiun_keberangkatan}</p>

                          <div className="w-[30%] h-0.5 bg-gradient-to-r from-orange-300 to-dark-orange relative flex justify-between items-center">
                            <div className="bg-orange-300 aspect-square h-3 rounded-full" />
                            <div className="bg-dark-orange aspect-square h-3 rounded-full" />
                          </div>

                          <p className="w-[30%] text-right">{data.stasiun_tujuan}</p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center gap-1">
                        <p>{new Date(data.tanggal_transaksi).toLocaleString()}</p>
                        <p>Total harga: Rp. {data.total_harga.toLocaleString()}</p>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      type="button"
                      className="w-[4%] grid place-items-center !p-0 rounded-tr-lg rounded-br-lg"
                      onClick={() => openSidebarDetail(data.id_transaksi)}
                      disabled={open}
                    >
                      <span className="block rotate-90 text-lg">Detail</span>
                    </Button>
                  </section>
                </li>
              )) ?? ''}
            </ul>
          )}
        </section>
      </main>
      <Detail state={open} handler={setOpen} transactionId={currentTransactionId} />
    </>
  )
}