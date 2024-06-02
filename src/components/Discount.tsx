'use client';

import { useEffect, useState } from 'react';

interface Props {
  persentase: number,
  judul: string,
  waktu_berakhir: string,
  img: string,
}

type Interval = {
  Hari: number,
  Jam: number,
  Menit: number,
  Detik: number,
}

export default function Discount({ judul, img, persentase, waktu_berakhir }: Readonly<Props>) {
  const [countDown, setCountDown] = useState<Interval>({
    Hari: 0,
    Jam: 0,
    Menit: 0,
    Detik: 0,
  });
  
  useEffect(() => {
    const timeOver = new Date(waktu_berakhir).getTime();

    const countDownInterval = setInterval(() => {
      const now = Date.now()
      const distance = timeOver - now

      setCountDown(() => ({
        Hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Detik: Math.floor((distance % (1000 * 60)) / 1000),
      }));
    }, 1000);

    return () => {
      clearInterval(countDownInterval);
    }
  }, []);

  return (
    <div
      className="w-full h-[26rem] p-6 bg-no-repeat bg-cover rounded-xl flex flex-col justify-end overflow-hidden relative group hover:backdrop-brightness-125 hover:w-[150%] duration-300 before:content-[''] before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t before:from-zinc-950 before:to-transparent"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative text-white z-10">
        <p className="text-6xl font-bold text-dark-orange">{persentase * 100}%</p>
        <h2 className="font-semibold text-2xl text-wrap w-full">{judul}</h2>
        <p className="text-md mb-2">Berakhir pada</p>

        <div className="grid grid-cols-4 gap-3">
          {Object.entries(countDown).map((time) => (
            <div key={time[0]} className="flex items-center justify-center flex-col gap-2">
              <p className="bg-white text-dark-orange font-semibold w-full aspect-square grid place-items-center rounded-lg text-xl group-hover:text-4xl duration-300">
                {time[1]}
              </p>

              <p className="text-sm group-hover:text-lg duration-300">{time[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}