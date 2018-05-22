import React from "react";

function FilterButtons({ allLaunches, onFilterListClick }) {
    // Falcon 10 is only for task 5, tesing 'not found'
  let filters = ['All rockets', "Falcon 10"];

  allLaunches.forEach(launch => {
    const rocketName = launch.rocket.rocket_name;
    if (filters.indexOf(rocketName) == -1) {
      filters.push(rocketName);
    }
  });

  const filterButtons = filters.map(filter => {
    const filterName = filter.replace(/\s/g, "").toLowerCase();
    return (
      <button key={filterName} id={filterName} onClick={onFilterListClick}>
        {filter}
      </button>
    );
  });

  return filterButtons;
}

export default FilterButtons;
