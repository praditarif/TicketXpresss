import Navbar from '@/components/Navbar';

interface Props {
  children: ChildNode,
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}