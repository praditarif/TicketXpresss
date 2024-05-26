import Link from 'next/link';

import Button from '@/components/Button';
import Input from '@/components/Input';
import ScheduleSearcher from '@/components/ScheduleSearcher';
import Ticket from '@/components/Ticket';

export default function Home() {
  const cover = 'https://images.unsplash.com/photo-1523667071851-4fda8c8a8dd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const reasons = [
    {
      img: 'easy-to-use',
      title: 'Easy to Use',
      description: 'Platform kami dirancang untuk kenyamanan Anda. Dengan antarmuka yang intuitif, Anda dapat memesan tiket dengan cepat dan tanpa kebingungan.',
    },
    {
      img: 'reliable',
      title: 'Reliable',
      description: 'Keandalan adalah prioritas kami. Dengan sistem yang teruji dan dilengkapi dengan teknologi terkini, dengan yakin bahwa setiap transaksi Anda dengan kami berjalan dengan mulus dan tanpa hambatan.',
    },
    {
      img: 'efficient',
      title: 'Efficient',
      description: ' Waktu Anda berharga. Kami memahami bahwa Anda menginginkan proses pemesanan tiket yang cepat dan efisien. Anda bisa menyelesaikan pesanan tiket dalam hitungan menit, membuat Anda fokus pada rencana perjalanan Anda.',
    },
    {
      img: 'on-demand',
      title: 'On Demand',
      description: 'Tidak peduli kapan dan di mana Anda berada, layanan kami siap melayani Anda. Dengan akses 24/7, Anda dapat memesan tiket kapan pun Anda membutuhkannya.',
    },
  ];

  const discounts = [
    {
      persentase: 0.1,
      judul: 'Idul Adha',
      waktu_berakhir: '2024-06-08T05:00:41.198Z',
      img: 'https://images.unsplash.com/photo-1551041777-ed277b8dd348?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      persentase: 0.15,
      judul: 'Imlek',
      waktu_berakhir: '2024-05-28T05:00:41.198Z',
      img: 'https://images.unsplash.com/photo-1698925436262-d4de6ef190c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      persentase: 0.2,
      judul: 'Kemerdekaan',
      waktu_berakhir: '2024-05-28T05:00:41.198Z',
      img: 'https://images.unsplash.com/photo-1566409031818-9508be68fc74?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  return (
    <>
      <main className="mt-12">
        {/* cover */}
        <section className="grid place-items-center p-14">
          <div className="w-full grid place-items-center">
            <div
              className="m-auto h-[80dvh] w-full bg-[0_-10dvh] bg-cover bg-no-repeat rounded-xl relative overflow-hidden before:content-[''] before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t before:from-zinc-950/90 before:to-transparent"
              style={{ backgroundImage: `url(${cover})` }}
            >
              <div className="flex items-end h-full justify-between p-10 z-10 relative">
                <div className="w-2/3">
                  <h1 className="text-white font-bold text-5xl mb-4">Melewati Cakrawala.</h1>
                  <p className="text-white text-xl font-normal">
                    Tembus cakrawala perjalanan Anda dnegan kereta cepat, dimulai dari memesan tiket di TiketXpress dengan mudah, cepat, dan aman.
                  </p>
                </div>

                <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100">
                  Cari Tiket Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* reasons */}
        <section className="flex w-full p-14" id="keunggulan">
          <div className="w-full">
            <div className="w-full grid place-items-center h-screen sticky top-0">
              <h1 className="text-light-orange font-bold text-5xl w-2/3">Kenapa TicketXpress?</h1>
            </div>
          </div>

          <div className="w-full object-center rounded-md">
            {reasons.map(({ img, title, description }) => (
              <div key={img} className="h-screen flex justify-center items-center flex-col w-[60%] mx-auto">
                <img src={`/svg/${img}.svg`} alt="" className="bg-gradient-to-tr from-blue-ocean to-blue-ocean/60 mx-auto p-10 w-full aspect-square rounded-xl" />

                <h2 className="text-2xl font-bold mt-8 mb-2">{title}</h2>
                <p className="text-center w-full ">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* discount offer */}
        <section className="bg-gradient-to-r from-blue-ocean to-blue-ocean/60 py-24 px-14" id="diskon">
          <div>
            <h1 className="text-white font-bold text-4xl text-center">Diskon Saat Ini!</h1>
            <p className="text-white font-normal text-xl text-center mt-3">Diskon digunakan ketika melakukan transaksi tiket</p>
          </div>

          <div className="flex w-full justify-center gap-12 px-48 mt-12">
            {discounts.map((discount) => <Ticket key={discount.judul} {...discount} />)}
          </div>
        </section>

        {/* schedule */}
        <section className="py-44 my-20 relative w-full overflow-hidden" id="cek-jadwal">
          <div className="space-y-24">
            <h1 className="font-bold text-4xl text-center">
              Tidak Sabar Ingin Memulai Perjalanan Anda?<br />
              Cek Jadwal Kereta Sekarang Juga!
            </h1>

            <div className="w-4/5 mx-auto">
              <ScheduleSearcher />
            </div>
          </div>

          <img src="/svg/wave.svg" alt="" className="absolute top-[30%] -left-[5%] -right-[5%] max-w-none w-[110%] -z-10" />
        </section>
      </main>

      <footer className="bg-blue-500 rounded-t-[3rem] mt-20 p-14">
        <div className="flex justify-between">
          <h1 className="text-white font-alegreya text-4xl italic">TicketXpress</h1>

          <div className="text-left">
            <p className="text-lg font-medium text-white">Aplikasi</p>

            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Beranda</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Daftar</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Masuk</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Jadwal</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Tiket</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Riwayat</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Cek Jadwal</Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <p className="text-lg font-medium text-white">Legal</p>

            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Syarat</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Ketentuan</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Privasi</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Kebijakan</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Cookies</Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <p className="text-lg font-medium text-white">Admin</p>

            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Masuk</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Dasbor</Link>
              </li>

              <li>
                <Link className="text-white duration-300 hover:text-light-orange" href="#">Manajemen</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-2xl font-semibold text-white text-right">Bergabung dengan berita kami!</p>
            <p className="font-normal text-white text-right">Kami akan mengirim berita yang menarik<br />setiap minggu, tidak spam</p>

            <div className="mx-auto mt-8">
              <form className="mt-4 flex gap-2">
                <label htmlFor="email" className="sr-only">Email</label>

                <Input
                  className="w-full rounded-lg"
                  type="email"
                  placeholder="Email"
                />

                <Button variant="primary" type="button" className="bg-light-orange rounded-lg">Kirim</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-white sm:text-left ">
            &copy; 2011-2024 PT. Trainxpress All Right Reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white duration-300 hover:text-light-orange"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white duration-300 hover:text-light-orange"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white duration-300 hover:text-light-orange"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white duration-300 hover:text-light-orange"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white duration-300 hover:text-light-orange"
              >
                <span className="sr-only">Dribbble</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
