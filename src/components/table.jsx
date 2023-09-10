import cn from 'classnames';
import { nanoid } from 'nanoid';

export default function Table({ titles, rows }) {
  return (
    <table className="w-full border border-spacing-0 border-separate rounded-xl">
      <thead>
        <tr>
          {titles?.map(({ label }) => (
            <th key={nanoid()} className="text-left p-4">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <tr key={nanoid()}>
            {titles?.map(({ value }) => (
              <td key={nanoid()} className={cn('text-left p-4 border')}>
                {row[value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
