import SumTable from "./SumTable/SumTable";
import TableSetting from "./SumTable/TableSetting";
import TableSettingsDropdown from "./SumTable/TableSettingsDropdown";

export interface Header {
  full: string;
  icon: string;
  color: string;
}

const Scoresheet = ({
  rowHeaders,
  inputRowAmount,
  inputColumnAmount,
}: {
  inputColumnAmount: number;
  inputRowAmount: number;
  rowHeaders: Array<Header>;
}) => {
  return (
    <div className="flex text-center text-sm text-black sm:text-lg">
      <div className="divide-y divide-gray-200 bg-white text-xs">
        <div className="h-12"></div>
        <div className="flex h-36 items-center justify-center whitespace-nowrap bg-green-200">
          <div
            className="w-full text-black"
            style={{
              writingMode: "vertical-lr",
              textAlign: "center",
              transform: "rotate(180deg)",
            }}
          >
            Amount On Cards
          </div>
        </div>
        <div className="flex h-36 items-center justify-center whitespace-nowrap bg-blue-200">
          <div
            className="w-full text-black"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            1 Point Each
          </div>
        </div>
        <div className="h-12"></div>
      </div>
      <div className="divide-y divide-gray-200 bg-white">
        <div className="flex h-12 items-center justify-center">
          <TableSettingsDropdown>
            <TableSetting value={inputColumnAmount} />
          </TableSettingsDropdown>
        </div>
        {rowHeaders.map(header => (
          <div className="flex h-12 items-center justify-center overflow-hidden p-2 sm:whitespace-nowrap">
            <span className="text-xs sm:inline-block">{header.full}</span>
          </div>
        ))}
        <div className="flex h-12 items-center justify-center overflow-hidden text-xs">
          Total
        </div>
      </div>
      <SumTable columnAmount={inputColumnAmount} rowAmount={inputRowAmount} />
    </div>
  );
};

export default Scoresheet;
