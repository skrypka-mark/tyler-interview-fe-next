import cn from 'classnames';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { nanoid } from 'nanoid';

export default function TableComponent({ titles, rows }) {
  return (
    <Table className='border border-spacing-0 border-separate rounded-xl'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    // <table className="w-full flex flex-row flex-no-wrap border border-spacing-0 border-separate rounded-xl">
    //   <thead>
    //     <tr>
    //       {titles?.map(({ label }) => (
    //         <th key={nanoid()} className="text-left p-4">
    //           {label}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {rows?.map((row) => (
    //       <tr key={nanoid()}>
    //         {titles?.map(({ value }) => (
    //           <td key={nanoid()} className={cn('text-left p-4 border')}>
    //             {row[value]}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}
