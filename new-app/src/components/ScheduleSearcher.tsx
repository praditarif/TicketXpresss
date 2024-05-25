import Button from './Button';
import Input from './Input';

export default function ScheduleSearcher() {
  const day = 1000 * 60 * 60 * 24;
  const min = new Date(Date.now() + day).toISOString().split("T")[0];
  const max = new Date(Date.now() + day * 30).toISOString().split("T")[0];

  return (
    <form className="flex justify-between items-end gap-3 py-6 px-8 shadow-lg border-[1px] border-zinc-300 rounded-xl bg-white">
      <label className="flex flex-col gap-2 w-full">
        <span className="text-zinc-700">Keberangkatan</span>
        <Input type="text" placeholder="Stasiun" name="stasiun_keberangkatan" className="w-full" />
      </label>

      <Button type="button" variant="secondary" className="w-24 aspect-square border-none hover:bg-zinc-300 rounded-full duration-300">
        <img src="/icon/switch.svg" alt="" className="w-full object-cover" />
      </Button>

      <label className="flex flex-col gap-2 w-full">
        <span className="text-zinc-700">Tujuan</span>
        <Input type="text" placeholder="Stasiun" name="stasiun_tujuan" className="w-full" />
      </label>

      <label className="flex flex-col gap-2 w-full">
        <span className="text-zinc-700">Tanggal</span>
        <Input type="date" placeholder="Stasiun" name="stasiun_tujuan" min={min} max={max} className="w-full" />
      </label>

      <Button variant="primary" type="submit" className="rounded-lg w-1/3 py-3">
        Cari Tiket
      </Button>
    </form>
  );
}