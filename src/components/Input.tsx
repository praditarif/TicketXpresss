interface Props extends React.ComponentProps<'input'> {}

export default function Input({ className = '', ...attributes }: Readonly<Props>) {
  const baseStyling = 'border-[1px] rounded-lg border-gray-300 px-4 py-3 text-sm shadow-sm';
  
  return (
    <input className={`${baseStyling} ${className}`} {...attributes} />
  );
}