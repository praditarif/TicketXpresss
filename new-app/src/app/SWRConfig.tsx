'use client';

import type { SWRConfiguration } from 'swr';

import { SWRConfig as Config } from 'swr';

interface Props {
  children: React.ReactNode
}

export default function SWRConfig({ children }: Props) {
  const config: SWRConfiguration = {
    fetcher: (url, init) => fetch(process.env.NEXT_PUBLIC_API_HOST + url, {
      ...init,
      credentials: 'include',
    })
      .then((response) => response.json()),
  }

  return (
    <Config value={config}>
      {children}
    </Config>
  )
}