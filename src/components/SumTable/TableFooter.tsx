interface TableFooterProps {
  columnAmount: number;
  calculateSum: (colIndex: number) => number;
}

const TableFooter: React.FC<TableFooterProps> = ({
  columnAmount,
  calculateSum,
}) => (
  <tfoot className="h-12">
    <tr className="divide-x">
      {Array(columnAmount)
        .fill("")
        .map((_, colIndex) => (
          <td key={colIndex} className="text-sm font-semibold text-gray-900">
            {calculateSum(colIndex)}
          </td>
        ))}
    </tr>
  </tfoot>
);

export default TableFooter;
