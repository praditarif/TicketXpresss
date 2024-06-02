'use client';

import useSWRMutation from 'swr/mutation';

import SideArea from '@/components/SideArea';
import fetcher from '@/utils/fetcher';
import { useEffect } from 'react';
import Loading from '@/components/Loading';

interface Props {
  transactionId: string,
  state: boolean,
  handler: (param: boolean) => void,
}

export default function Detail({ transactionId, state, handler }: Readonly<Props>) {
  const { isMutating, data, trigger } = useSWRMutation(`/transaction/${transactionId}`, fetcher('GET'));

  useEffect(() => {
    if (state) {
      trigger();
    }
  }, [transactionId]);

  if (isMutating) {
    return (
      <SideArea state={state} handler={handler}>
        <div className="h-[80dvh] grid place-items-center">
          <Loading />
        </div>
      </SideArea>
    );
  }

  return (
    <SideArea state={state} handler={handler}>
      {data && data.code === 200 ? (
        <div className="mt-4 flex flex-col gap-6">
          <div>
            <h1>Kode Transaksi</h1>
            <p className="text-blue-ocean truncate font-semibold">{data.payload.id_transaksi}</p>
          </div>

          <figure>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${transactionId}`}
              alt="qr code"
              className="w-full aspect-square p-2 border border-zinc-700 rounded-md"
            />

            <figcaption className="text-sm text-center text-zinc-600 mt-2">Tunjukkan QR Code sebagai boarding pass</figcaption>
          </figure>

          <section className="grid grid-cols-2 grid-rows-2 gap-4">
            <div>
              <h2 className="text-sm">Kereta</h2>
              <p className="text-blue-ocean truncate font-semibold">{data.payload.kereta}</p>
            </div>

            <div>
              <h2 className="text-sm">Tanggal Transaksi</h2>
              <p className="text-blue-ocean truncate font-semibold">{new Date(data.payload.tanggal_transaksi).toLocaleString()}</p>
            </div>

            <div>
              <h2 className="text-sm">Asal</h2>
              <p className="text-blue-ocean truncate font-semibold">{data.payload.stasiun_keberangkatan}</p>
            </div>

            <div>
              <h2 className="text-sm">Tujuan</h2>
              <p className="text-blue-ocean truncate font-semibold">{data.payload.stasiun_tujuan}</p>
            </div>
          </section>

          <section className="mt-6">
            <h2>Penumpang</h2>

            <ul className="space-y-4 mt-4">
              {data.payload.penumpang.map((data: any) => (
                <li key={data.tiket}>
                  <section className="bg-gradient-to-br from-blue-ocean to-blue-400 text-white p-3 rounded-md">
                    <h3>{data.nama}</h3>

                    <div className="flex gap-2 text-sm">
                      <p>{data.jenis_identitas.toUpperCase()}</p>
                      <p>{data.identitas}</p>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <div className="h-[90dvh] grid place-items-center">
          <p>Error, silahkan coba lagi!</p>
        </div>
      )}
    </SideArea>
  )
}