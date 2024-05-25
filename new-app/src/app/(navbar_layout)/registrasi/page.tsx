import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Page() {
  return (
    <div className="grid grid-cols-2 place-items-center h-dvh w-full bg-cover bg-no-repeat pt-16" style={{ backgroundImage: 'url(/image/auth-background.avif)' }}>
      <div className="bg-white col-start-2 w-fit h-fit rounded-xl p-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-left text-2xl font-bold text-black">Registrasi</h1>

          <p className="mx-auto max-w-md text-left mt-1 text-gray-500">
            Daftarlah sekarang untuk mulai menikmati layanan kami
          </p>

          <form action="#">
            <div className="space-y-2.5 my-6">
              <label className="sr-only" htmlFor="name">Nama Lengkap</label>
              <Input
                className="w-full"
                placeholder="Nama Lengkap"
                type="text"
                name="nama_lengkap"
                id="name"
                required
              />

              <div className="flex gap-2.5">
                <label className="sr-only" htmlFor="call-name">Name</label>
                <Input
                  className="w-full"
                  placeholder="Nama Panggilan"
                  type="text"
                  id="call-name"
                  name="nama_panggilan"
                  required
                />

                <label className="sr-only" htmlFor="phone">Phone</label>
                <Input
                  className="w-full"
                  placeholder="Telepon"
                  type="tel"
                  id="phone"
                  name="telepon"
                  required
                />
              </div>

              <label htmlFor="email" className="sr-only">Email</label>
              <Input type="email" className="w-full" placeholder="Email" id="email" name="email" />

              <div className="flex gap-2.5">
                <select name="jenis_identitas" className="bg-blue-500 rounded-lg text-white p-3 w-1/4" required>
                  <option value="ktp">KTP</option>
                  <option value="passpor">Passpor</option>
                </select>

                <label className="sr-only" htmlFor="identity">Nomor Identitas</label>
                <Input
                  className="w-full"
                  placeholder="Nomor Identitas"
                  type="number"
                  id="identity"
                  name="identitas"
                  required
                />
              </div>

              <label htmlFor="password" className="sr-only">Password</label>
              <Input
                type="password"
                className="w-full"
                placeholder="Password"
                id='password'
                name="password"
                required
              />

              <label htmlFor="confirm-password" className="sr-only">Password</label>
              <Input
                type="password"
                className="w-full"
                placeholder="Konfirmasi Password"
                id="confirm-password"
                name="confirm_password"
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-lg" variant="primary">
              Registrasi
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}