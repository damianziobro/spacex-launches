import React from "react";

import "./FilterButtons.css";

function FilterButtons({ onFilterListClick }) {
  const filterButtonNames = ["All", "Falcon 1", "Falcon 9", "Falcon Heavy"];

  const filterButtons = filterButtonNames.map(filterButtonName => {
    const filterButtonId = filterButtonName.replace(/\s/g, "").toLowerCase();

    return (
      <button
        className="filter-buttons__button"
        key={filterButtonId}
        id={filterButtonId}
        onClick={onFilterListClick}
      >
        {filterButtonName}
      </button>
    );
  });

  return <div className="filter-buttons">{filterButtons}</div>;
}

export default FilterButtons;
