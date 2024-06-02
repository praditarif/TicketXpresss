'use client';

import type { LinkProps } from 'next/link';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

interface Props extends LinkProps {
  children: any,
  className?: string,
}

export default function Link({
  children,
  className = '',
  ...attributes
}: Readonly<Props>) {
  const pathname = usePathname();

  const baseStyle = 'flex items-center gap-5 px-5 py-3 rounded-lg duration-200'
  const color = attributes.href === pathname
    ? 'bg-blue-600 text-white'
    : 'hover:bg-blue-100 hover:text-blue-700';

  return (
    <NextLink className={`${baseStyle} ${color} ${className}`} {...attributes}>
      {children}
    </NextLink>
  );
}