import React from 'react';

import './RocketData.sass';

function RocketData({ launch, launchSite, rocket }) {
    return (
        <div className="rocket-data">
            <section>
                <span className="launchDate">{launch.launch_date_local}</span>
                <h2>{launch.rocket.rocket_name}</h2>
                <span className="timeToLaunch"></span>
                <img src={launch.links.mission_patch_small} alt="Rocket" />
            </section>
            <div>
                <section>
                    <h3>Details</h3>
                    <p>{launch.details}</p>
                </section>
                <section>
                    <h3>Rocket</h3>
                    <ul>
                        <li>
                            <span className="title">
                                Name:
                            </span>
                            <span className="data">
                                {rocket.name}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Company:
                            </span>
                            <span className="data">
                                {rocket.company}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Height:
                            </span>
                            <span className="data">
                                {`${rocket.height.meters}M / ${rocket.height.feet}FT`}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Diameter:
                            </span>
                            <span className="data">
                            {`${rocket.diameter.meters}M / ${rocket.diameter.feet}FT`}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Mass:
                            </span>
                            <span className="data">
                            {`${rocket.mass.kg}KG / ${rocket.mass.lb}LB`}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                First flight:
                            </span>
                            <span className="data">
                                {rocket.first_flight}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Country:
                            </span>
                            <span className="data">
                                {rocket.country}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Success rate:
                            </span>
                            <span className="data">
                                {rocket.success_rate_pct}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Cost per launch:
                            </span>
                            <span className="data">
                                {rocket.cost_per_launch}
                            </span>
                        </li>
                    </ul>
                    <p>{rocket.description}</p>
                </section>
                <section>
                    <h3>Launch Pad</h3>
                    <ul>
                        <li>
                            <span className="title">
                                Name:
                            </span>
                            <span className="data">
                                {launchSite.full_name}
                            </span>
                        </li>
                        <li>
                            <span className="title">
                                Location:
                            </span>
                            <span className="data">
                                {`${launchSite.location.name},${launchSite.location.region}`}
                            </span>
                        </li>
                    </ul>
                    <p>{launchSite.details}</p>
                </section>
            </div>
            <section className="missionLinks">
                <h2>Mission links</h2>
                <ul>
                    <li>
                        <a href={launch.links.reddit_campaign} target="_blank">
                            Reddit campaign
                        </a>
                    </li>
                    <li>
                        <a href={launch.links.presskit} target="_blank">
                            Presskit
                        </a>
                    </li>
                    <li>
                        <a href={launch.links.video_link} target="_blank">
                            Mission video
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default RocketData;