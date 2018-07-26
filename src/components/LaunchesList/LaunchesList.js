import React from "react";
import { format } from "date-fns";
import Footer from "../Footer/Footer";

import logo from "../../assets/img/space_x_logo_bw_centered.png";
import arrow from "../../assets/img/arrow_pointer.png";

import FilterButtons from "../FilterButtons/FilterButtons";
import Loading from "../UI/Loading/Loading";

import "./LaunchesList.css";

function LaunchesList({
  launchesList,
  isNotFound,
  isLoading,
  isError,
  onFilterListBtnClick,
  onGoToDetailsClick,
}) {
  return (
    <div>
      <div className="launches-list">
        <div className="launches-list__wrapper">
          <div className="launches-list__top">
            <img className="launches-list__logo" src={logo} alt="SpaceX logo" />
            <p className="launches-list__text">Launches 2018</p>
            <FilterButtons
              onFilterListClick={onFilterListBtnClick}
            />
          </div>
          <div>
            {isLoading ? <Loading /> : null}
            {isError ? <div className="launches-list__error">Error</div> : null}
            <div className="launches-list__launches">
              {isNotFound ? (
                <span className="launches-list__error">
                  Sorry, no launches found
            </span>
              ) : launchesList ? (
                launchesList.map(launch => {
                  return (
                    <div
                      className="launch"
                      key={launch.flight_number}
                      onClick={event =>
                        onGoToDetailsClick(
                          event,
                          launch.flight_number,
                          launch.rocket.rocket_name
                            .replace(/\s/g, "")
                            .toLowerCase(),
                          launch.launch_site.site_id
                        )
                      }
                    >
                      <span className="launch__date">
                        {format(launch.launch_date_local, "DD MMMM YYYY")}
                      </span>
                      <div className="launch__arrow">
                        <img className="launch__arrow-icon" src={arrow} />
                      </div>
                      <ul className="launch__list">
                        <li className="launch__list-item">
                          <div className="launch__name">Rocket: </div>
                          <div className="launch__data">
                            {launch.rocket.rocket_name}
                          </div>
                        </li>
                        <li className="launch__list-item">
                          <div className="launch__name">Launch Site: </div>
                          <div className="launch__data">
                            {launch.launch_site.site_name_long}
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaunchesList;
