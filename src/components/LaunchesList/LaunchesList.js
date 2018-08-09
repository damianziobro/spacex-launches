import React from 'react';
import Footer from '../Footer/Footer';

import logo from '../../assets/img/space_x_logo_bw_centered.png';

import FilterButtons from '../FilterButtons/FilterButtons';
import Launch from '../Launch/Launch';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';

import './LaunchesList.css';

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
            <p className="launches-list__text">
              Launches 2018
            </p>
            <FilterButtons onFilterListClick={onFilterListBtnClick} />
          </div>
          <div>
            {(isLoading && <Loading />)}
            {(isError && <Error />)}
            <div className="launches-list__launches">
              {(isNotFound && (
                <span className="launches-list__error">
                  Sorry, no launches found
                </span>
              ))}
              {(launchesList && (
                launchesList.map(launch => <Launch launch={launch} onGoToDetailsClick={onGoToDetailsClick} />)
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaunchesList;
