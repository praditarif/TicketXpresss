'use client';

import { useRouter } from 'next/navigation';

interface Props extends React.ComponentProps<'button'> {
  href?: string
  variant: 'primary' | 'secondary',
  children: any,
  className?: string,
}

export default function Button({
  variant,
  href,
  children,
  className = '',
  ...attributes
}: Readonly<Props>) {
  const router = useRouter();

  const baseStyling = 'px-4 py-2';
  const buttonTheme = variant === 'primary'
    ? 'bg-dark-orange text-white disabled:bg-dark-orange/70'
    : 'bg-white text-dark-orange border-dark-orange border';

  const onNavigate = () => router.push(href as string);

  if (typeof href === 'string') {
    return (
      <button
        className={`${baseStyling} ${buttonTheme} ${className}`}
        onClick={onNavigate}
        {...attributes}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${baseStyling} ${buttonTheme} ${className}`}
      {...attributes}
    >
      {children}
    </button>
  );
}