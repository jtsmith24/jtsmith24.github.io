interface TableHeaderProps {
  headerData: string[];
  handleHeaderChange: (e: any, colIndex: number) => void;
  handleTableKeyDown: (e: any, colIndex: number) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  headerData,
  handleHeaderChange,
  handleTableKeyDown,
}) => (
  <thead className="text-gray-900">
    <tr className="divide-x">
      {headerData.map((headerValue, colIndex) => (
        <th key={colIndex} className="h-12">
          <input
            className="w-full text-center uppercase text-black sm:text-sm"
            type="text"
            value={headerValue}
            onChange={e => handleHeaderChange(e, colIndex)}
            onKeyDown={e => handleTableKeyDown(e, colIndex)}
            id={`header-${colIndex}-0`}
            maxLength={3}
          />
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
