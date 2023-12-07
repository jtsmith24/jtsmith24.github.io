interface TableRowProps {
  rowData: string[];
  rowIndex: number;
  handleInputChange: (e: any, rowIndex: number, colIndex: number) => void;
  handleTableKeyDown: (e: any, rowIndex: number, colIndex: number) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  rowData,
  rowIndex,
  handleInputChange,
  handleTableKeyDown,
}) => (
  <tr className="h-12 divide-x">
    {rowData.map((cellValue, colIndex) => (
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
          onKeyDown={e => handleTableKeyDown(e, rowIndex, colIndex)}
          id={`input-${colIndex}-${rowIndex}`}
        />
      </td>
    ))}
  </tr>
);

export default TableRow;
