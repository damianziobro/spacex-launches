import React from "react";

import "./LaunchDataSection.css";

function LaunchDataSection({ heading, items, description }) {
  return (
    <section className="launch-data-section">
      <h3 className="launch-data-section__heading">{heading}</h3>
      {items ? (
        <ul className="launch-data-section__list">
          {items.map(item => {
            return (
              <li key={item.label} className="launch-data-section__item">
                <span className="launch-data-section__label">
                  {`${item.label}: `}
                </span>
                <span className="launch-data-section__data">{item.data}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
      <p className="launch-data-section__description">{description}</p>
    </section>
  );
}

export default LaunchDataSection;
