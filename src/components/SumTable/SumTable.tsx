import React, { useState, useEffect } from "react";
import "./styles/sum-table-styles.css";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const SumTable = ({
  columnAmount,
  rowAmount,
}: {
  columnAmount: number;
  rowAmount: number;
}) => {
  //Todo: Separate into different components
  //Todo: Add a button to clear all data
  //Todo: Add a button to set how many players there are
  //Todo: Make more generic so that it can be used for other things
  //Todo: Make more responsive
  //Todo: Clean up styling
  //Todo: Use arrows to navigate between inputs
  //Todo: Fix enter not working on mobile

  const [tableData, setTableData] = useState(
    Array.from({ length: rowAmount }, () => Array(columnAmount).fill(""))
  );
  const [headerData, setHeaderData] = useState(Array(columnAmount).fill(""));
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
    const re = /^[0-9]+$/;
    if (input === "" || (re.test(input) && input.length < 4)) {
      return true;
    }
    return false;
  };

  const handleTableKeyDown = (
    e: any,
    rowIndex: number,
    colIndex: number,
    isHeaderRow: boolean
  ) => {
    if (e.code === "Enter" || e.key === "Enter") {
      e.preventDefault();
      const nextRowIndex = isHeaderRow ? 0 : rowIndex + 1;
      if (nextRowIndex < tableData.length) {
        const nextInput = document.querySelector(
          `#input-${colIndex}-${nextRowIndex}`
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleHeaderKeyDown = (e: any, colIndex: number) => {
    handleTableKeyDown(e, 0, colIndex, true);
  };

  const handleBodyKeyDown = (e: any, rowIndex: number, colIndex: number) => {
    handleTableKeyDown(e, rowIndex, colIndex, false);
  };

  return (
    <table
      id="sum-table"
      className="w-full table-auto divide-y divide-gray-200 border bg-white text-center"
    >
      <TableHeader
        headerData={headerData}
        handleHeaderChange={handleHeaderChange}
        handleTableKeyDown={handleHeaderKeyDown}
      />
      <TableBody
        tableData={tableData}
        handleInputChange={handleInputChange}
        handleTableKeyDown={handleBodyKeyDown}
      />
      <TableFooter columnAmount={columnAmount} calculateSum={calculateSum} />
    </table>
  );
};

export default SumTable;
