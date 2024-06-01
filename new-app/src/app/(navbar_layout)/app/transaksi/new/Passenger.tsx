import { IoClose } from 'react-icons/io5';

import Input from '@/components/Input';

interface Props {
  value: {
    id: number,
    nama: string,
    jenis_identitas: 'ktp' | 'passpor',
    identitas: string,
  },
  passengerCount: number,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: number) => void,
  deleteHandler: (id: number) => void,
}

export default function Passenger({ passengerCount, value, changeHandler, deleteHandler }: Readonly<Props>) {
  return (
    <div className="bg-white shadow-md rounded-lg border border-zinc-200 overflow-hidden p-6 flex flex-col gap-4 relative">
      {passengerCount > 1 && (
        <button type="button" className="ml-auto absolute top-5 right-6" onClick={() => deleteHandler(value.id)}>
          <IoClose />
        </button>
      )}

      <label htmlFor="nama" className="flex flex-col gap-2">
        Nama Lengkap{' '}

        <Input
          className="w-full"
          placeholder="Nama Lengkap"
          type="text"
          id="nama"
          name="nama_${"
          value={value.nama}
          onChange={(e) => changeHandler(e, value.id)}
          required
        />
      </label>

      <div className="flex flex-col gap-2">
        <label htmlFor="identitas" className="flex flex-col gap-2">Identitas</label>

        <div className="flex gap-3">
          <select
            name="jenis_identitas_${"
            className="bg-blue-500 rounded-lg text-white p-3 w-fit"
            value={value.jenis_identitas}
            onChange={(e) => changeHandler(e, value.id)}
            required
          >
            <option value="ktp">KTP</option>
            <option value="passpor">Passpor</option>
          </select>

          <Input
            className="w-full"
            placeholder="Nomor Identitas"
            type="text"
            id="identitas"
            name={`identitas_${value.id}`}
            value={value.identitas}
            onChange={(e) => changeHandler(e, value.id)}
            required
          />
        </div>
      </div>
    </div>
  )
}
