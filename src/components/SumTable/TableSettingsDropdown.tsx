import React, { useState } from "react";
import "./styles/sum-table-styles.css";

const TableSettingsDropdown = ({ children }: { children: React.ReactNode }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (e: any) => {
    console.log(e);
    setDropdownVisible(prev => !prev);
  };

  return (
    <div className="settings-dropdown">
      <button onClick={toggleDropdown}>
        <i className="fa-solid fa-gear text-blue-900"></i>
      </button>
      <div
        className={`dropdown-content${
          dropdownVisible ? " visible" : " invisible"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TableSettingsDropdown;
