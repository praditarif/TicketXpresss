import Input from '@/components/Input';
import Button from '@/components/Button';

export default function page() {
  return (
    <main className="grid grid-cols-2 w-full">
      <img src="/svg/admin-login-bg.svg" alt="" className="h-dvh" />

      <form className="flex flex-col bg-white p-10 shadow-2xl rounded-2xl place-self-center w-2/3 border border-zinc-200">
        <h1 className="flex text-4xl font-semibold mb-2">Admin</h1>
        <p className="flex text-base justify-between text-gray-600">Akses Dashboard Admin. Jika Anda seorang pengguna biasa, mohon kembali ke halaman semula</p>

        <div className="w-full space-y-3 my-8">
          <label htmlFor="email" className="sr-only">Email</label>
          <Input type="email" name="email" id="email" placeholder="Username" className="w-full" />
          <label htmlFor="password" className="sr-only">Password</label>
          <Input type="password" name="password" id="password" placeholder="Password" className="w-full" />
        </div>

        <Button variant="primary" type="submit" className="rounded-lg">Login</Button>
      </form>
    </main>
  );
}