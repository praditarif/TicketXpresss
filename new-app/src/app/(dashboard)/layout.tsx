import Sidebar from '@/components/Sidebar';

interface Prop {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<Prop>) {
  return (
    <div className="w-full flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        {children}
      </div>
    </div>
  );
}