import React from 'react';
import { format } from 'date-fns';

import arrow from '../../assets/img/arrow_pointer.png';

import './Launch.css';

function Launch({ launch, onGoToDetailsClick }) {
  return (
      <button
          type="button"
          className="launch"
          key={launch.flight_number}
          onClick={event => onGoToDetailsClick(
              event,
              launch.flight_number,
              launch.rocket.rocket_name.replace(/\s/g, '').toLowerCase(),
              launch.launch_site.site_id,
            )}
        >
          <span className="launch__date">
              {format(launch.launch_date_local, 'DD MMMM YYYY')}
            </span>
          <div className="launch__arrow">
              <img
                  className="launch__arrow-icon"
                  src={arrow}
                  alt="Go to launch details button"
                />
            </div>
          <ul className="launch__list">
              <li className="launch__list-item">
                  <div className="launch__name">
                        Rocket:
                    </div>
                  <div className="launch__data">
                      {launch.rocket.rocket_name}
                    </div>
                </li>
              <li className="launch__list-item">
                  <div className="launch__name">
                        Launch Site:
                    </div>
                  <div className="launch__data">
                      {launch.launch_site.site_name_long}
                    </div>
                </li>
            </ul>
        </button>
  );
}

export default Launch;
