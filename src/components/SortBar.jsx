import React from "react";

const SortBar = ({ onSort }) => (
  <div className="floating-sort">
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="">Sort By</option>
      <option value="health">Health</option>
      <option value="damage">Damage</option>
      <option value="armor">Armor</option>
    </select>
  </div>
);

export default SortBar;