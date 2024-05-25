import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-10 py-4 shadow-lg fixed top-0 left-0 bg-white">
      <h1 className="text-blue-ocean font-texturina italic font-bold text-2xl w-1/5 -mt-1.5">TicketXpress</h1>

      <ul className="flex items-center gap-10">
        <li>
          <Link className="hover:text-gray-500" href="/">Beranda</Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="/#keunggulan">Keunggulan</Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="/#diskon">Diskon</Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="/#cek-jadwal">Cek Jadwal</Link>
        </li>
      </ul>

      <div className="flex justify-end items-center gap-3 w-1/5">
        <Button href="/login" variant="secondary" className="rounded-full">Login</Button>
        <Button href="/registrasi" variant="primary" className="rounded-full
        ">Registrasi</Button>
      </div>
    </nav>
  )
}