import { IoClose } from 'react-icons/io5';

interface Props {
  children: any,
  state: boolean,
  handler: (value: boolean) => void,
}

export default function SideArea({ state, handler, children }: Readonly<Props>) {
  return (
    <aside className={`fixed top-0 bg-white h-dvh w-1/4 shadow-xl z-50 border-l border-zinc-300 p-5 right-0 duration-200 ${state ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
      <div className="flex justify-end">
        <button type="button" onClick={() => handler(false)}>
          <IoClose className="text-lg" />
        </button>
      </div>
      {children}
    </aside>
  );
}