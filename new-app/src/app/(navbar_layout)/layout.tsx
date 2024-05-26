import Navbar from '@/components/Navbar';

interface Props {
  children: React.ReactNode,
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}