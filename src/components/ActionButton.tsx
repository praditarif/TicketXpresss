import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

import fetcher, { FetcherMethod } from '@/utils/fetcher';

interface ActionButtonProps extends React.ComponentProps<'button'> {
  routeAction: string,
  revalidateRoute: string,
  method: Extract<FetcherMethod, 'PATCH' | 'DELETE'>,
  children: any,
  className?: string,
}

export default function ActionButton({
  routeAction,
  method,
  revalidateRoute,
  children,
  className = '',
  ...attributes
}: Readonly<ActionButtonProps>) {
  const { trigger, data } = useSWRMutation(routeAction, fetcher(method));

  useEffect(() => {
    if (data) {
      if (data.code === 200) {
        toast.success(data.message);
        mutate(revalidateRoute);
      } else {
        toast.error(data.message);
      }
    }
  }, [data]);

  return (
    <button
      onClick={() => trigger()}
      type="button"
      className={`p-1.5 rounded-md border ${className}`}
      {...attributes}
    >
      {children}
    </button>
  );
}