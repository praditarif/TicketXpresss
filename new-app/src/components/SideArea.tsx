interface Props {
  children: React.ReactElement
}

export default function SideArea({ children }: Readonly<Props>) {
  return (
    <aside>
      {children}
    </aside>
  );
}