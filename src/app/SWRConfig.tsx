'use client';

import fetcher from '@/utils/fetcher';
import type { SWRConfiguration } from 'swr';

import { SWRConfig as Config } from 'swr';

interface Props {
  children: React.ReactNode
}

export default function SWRConfig({ children }: Props) {
  const config: SWRConfiguration = {
    fetcher: fetcher('GET'),
  }

  return (
    <Config value={config}>
      {children}
    </Config>
  )
}