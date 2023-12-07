import React from "react";

const TableSetting = ({
  value,
}: {
  value: string | number | readonly string[] | undefined;
}) => {
  return (
    <select
      onChange={e => {
        // Handle column selection change
      }}
      value={value}
    >
      <option value="2">2 columns</option>
      <option value="3">3 columns</option>
      <option value="4">4 columns</option>
    </select>
  );
};

export default TableSetting;
