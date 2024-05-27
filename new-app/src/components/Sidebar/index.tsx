import {
  IoHome,
  IoNewspaper,
  IoPerson,
  IoPricetag,
  IoTicket,
  IoTime,
} from 'react-icons/io5';

import Link from './Link';
import ProfileCard from './ProfileCard';

export default function Sidebar() {
  return (
    <aside className="h-dvh w-full p-8 border-r border-zinc-300 flex flex-col gap-8 sticky top-0">
      <h1 className="flex flex-col">
        <span className="font-alegreya italic text-3xl text-blue-ocean">TicketXpress</span>
        <span className="text-xl font-semibold text-dark-orange -mt-1">MyAdmin.</span>
      </h1>

      <nav>
        <Link href="/admin">
          <IoHome className="text-xl" /> Beranda
        </Link>

        <p className="flex justify-start items-center mt-6 mb-4">Manajemen</p>
        <ul className="space-y-2">
          <li>
            <Link href="/admin/jadwal">
              <IoTime className="text-xl" /> Jadwal
            </Link>
          </li>

          <li>
            <Link href="/admin/tiket">
              <IoTicket className="text-xl" /> Tiket
            </Link>
          </li>

          <li>
            <Link href="/admin/diskon">
              <IoPricetag className="text-xl" /> Diskon
            </Link>
          </li>

          <li>
            <Link href="/admin/transaksi">
              <IoNewspaper className="text-xl" /> Transaksi
            </Link>
          </li>

          <li>
            <Link href="/admin/pengguna">
              <IoPerson className="text-xl" /> Pengguna
            </Link>
          </li>
        </ul>
      </nav>

      <ProfileCard />
    </aside>
  );
}
