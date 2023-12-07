interface TableBodyProps {
  tableData: any[][];
  handleInputChange: (e: any, rowIndex: number, colIndex: number) => void;
  handleTableKeyDown: (
    e: any,
    rowIndex: number,
    colIndex: number,
    isHeaderRow: boolean
  ) => void;
}

const TableBody: React.FC<TableBodyProps> = ({
  tableData,
  handleInputChange,
  handleTableKeyDown,
}) => (
  <tbody className="divide-y divide-gray-200 bg-white">
    {tableData.map((row, rowIndex) => (
      <tr className="h-12 divide-x" key={rowIndex}>
        {row.map((cellValue, colIndex) => (
          <td key={`${colIndex}-${rowIndex}`} className="whitespace-nowrap">
            <input
              className="custom-number-input w-full text-center text-black sm:text-sm"
              type="text"
              value={cellValue}
              onChange={e => handleInputChange(e, rowIndex, colIndex)}
              pattern="\d*"
              inputMode="numeric"
              min={0}
              max={999}
              step={1}
              onKeyDown={e => handleTableKeyDown(e, rowIndex, colIndex, false)}
              id={`input-${colIndex}-${rowIndex}`}
            />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
