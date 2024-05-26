interface Props {
  header: string[],
  data: Array<{ [index: string]: any }>,
  number?: boolean,
}

export default function Table({ header, data, number }: Readonly<Props>) {
  const flattenData = data.map((data) => Object.entries(data));

  return (
    <table className="w-full rounded-md overflow-hidden outline outline-1 outline-zinc-200 shadow-md">
      <thead className="bg-blue-ocean">
        <tr>
          {number && <th scope="col" className="text-left text-white font-normal py-2 px-3">No</th>}
          {header.map((title) => (
            <th
              key={title}
              scope="col"
              className="text-left text-white font-normal py-2 px-3"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {flattenData.map((data, i) => (
          <tr className={`${i % 2 === 1 && 'bg-zinc-100'}`} key={i + Date.now()}>
            {number && <td className="py-2 px-3 text-sm">{i + 1}</td>}

            {data.map((data) => (
              <td className="py-2 px-3 text-sm" key={data[1] + Date.now()}>{data[1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}