import { memo, useCallback, useState } from 'react';
import { IoClose } from 'react-icons/io5';
interface Props {
  children: React.ReactElement,
}

export default function useSideArea() {
  const [state, setState] = useState(true);

  const handler = useCallback((value: boolean) => setState(value), []);

  return {
    setState: handler,
    SideArea: memo(({ children }: Readonly<Props>) => (
      <aside
        className={`fixed top-0 bg-white h-dvh w-1/5 shadow-xl border-l border-zinc-300 p-4 ${state ? 'right-0' : '-right-full'}`}
      >
        <div>
          <button type="button" onClick={() => handler(false)}>
            <IoClose className="text-lg" />
          </button>
        </div>
        {children}
      </aside>
    )),
  };
}