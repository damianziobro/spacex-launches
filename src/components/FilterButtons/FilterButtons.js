import React from "react";

function FilterButtons({ allLaunches }) {
  let rocketNames = [];

  allLaunches.forEach(launch => {
    const rocketName = launch.rocket.rocket_name;
    if (rocketNames.indexOf(rocketName) == -1) {
      rocketNames.push(rocketName);
    }
  });

  const rockets = rocketNames.map(rocket => {
    return (
      <button key={rocket} id={rocket}>
        {rocket}
      </button>
    );
  });

  return rockets;
}

export default FilterButtons;
