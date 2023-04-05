import React, { useState, useEffect } from "react";
import "./styles/sum-table-styles.css";

const SumTable = ({
  columns,
  rows,
  rowHeaders = [],
}: {
  columns: number;
  rows: number;
  rowHeaders: Array<{ full: string; icon: string; color: string }>;
}) => {
  //Todo: Separate different tables into different components
  //Todo: Add a button to clear all data
  //Todo: Add a button to set how many players there are
  //Todo: Make more generic so that it can be used for other things
  //Todo: Make more responsive
  //Todo: Clean up styling
  //Todo: Use arrows to navigate between inputs

  const [tableData, setTableData] = useState(
    Array.from({ length: rows }, () => Array(columns).fill(""))
  );
  const [headerData, setHeaderData] = useState(Array(columns).fill(""));

  const handleInputChange = (e: any, rowIndex: number, colIndex: number) => {
    if (!validateNumberInput(e.target.value)) return;
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = e.target.value;
    setTableData(newTableData);
  };

  const handleHeaderChange = (e: any, colIndex: number) => {
    const newHeaderData = [...headerData];
    newHeaderData[colIndex] = e.target.value;
    setHeaderData(newHeaderData);
  };

  const calculateSum = (colIndex: number) => {
    return tableData.reduce(
      (sum, row) => sum + (parseInt(row[colIndex]) || 0),
      0
    );
  };

  const validateNumberInput = (input: any) => {
    const re = /^[0-9\b]+$/;
    if (input === "" || (re.test(input) && input.length < 4)) {
      return true;
    }
    return false;
  };

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
        <div className="h-12"></div>
        {rowHeaders.map((header, colIndex) => (
          <div
            key={colIndex}
            className="flex h-12 items-center justify-center p-2 sm:whitespace-nowrap"
          >
            <span className="hidden sm:inline-block">{header.full}</span>
            <i
              className={`${header.icon} sm:hidden ${header.color}`}
              aria-hidden="true"
            ></i>
          </div>
        ))}
        <div className="flex h-12 items-center justify-center overflow-hidden">
          <span className="hidden w-full text-center text-sm sm:inline-block sm:text-base">
            Total
          </span>
          <span className="inline-block w-full text-center text-sm sm:hidden sm:text-base">
            T
          </span>
        </div>
      </div>
      <table className="w-full table-auto divide-y divide-gray-200 border bg-white text-center">
        <thead className="text-gray-900">
          <tr className="divide-x">
            {headerData.map((headerValue, colIndex) => (
              <th key={colIndex} className="h-12">
                <input
                  className="w-full text-center text-black sm:text-sm"
                  type="text"
                  value={headerValue}
                  onChange={e => handleHeaderChange(e, colIndex)}
                  onKeyDown={e => {
                    if (e.code === "Enter") {
                      //nextRowIndex always 0 because we are in the header, table inputs start at 0
                      const nextRowIndex = 0;
                      if (nextRowIndex < tableData.length) {
                        const nextInput = document.querySelector(
                          `#input-${colIndex}-${nextRowIndex}`
                        ) as HTMLInputElement;
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }
                  }}
                  id={`header-${colIndex}-0`}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {tableData.map((row, rowIndex) => (
            <tr className="h-12 divide-x" key={rowIndex}>
              {row.map((cellValue, colIndex) => (
                <td
                  key={`${colIndex}-${rowIndex}`}
                  className="whitespace-nowrap"
                >
                  <input
                    className="custom-number-input w-full text-center text-black sm:text-sm"
                    type="number"
                    value={cellValue}
                    onChange={e => handleInputChange(e, rowIndex, colIndex)}
                    min={0}
                    max={999}
                    step={1}
                    onKeyDown={e => {
                      if (e.code === "Enter") {
                        const nextRowIndex = rowIndex + 1;
                        if (nextRowIndex < tableData.length) {
                          const nextInput = document.querySelector(
                            `#input-${colIndex}-${nextRowIndex}`
                          ) as HTMLInputElement;
                          if (nextInput) {
                            nextInput.focus();
                          }
                        }
                      }
                    }}
                    id={`input-${colIndex}-${rowIndex}`}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className="h-12 divide-x">
            {Array(columns)
              .fill("")
              .map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="text-sm font-semibold text-gray-900"
                >
                  {calculateSum(colIndex)}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SumTable;
