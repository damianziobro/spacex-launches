import React from 'react';

import './Footer.sass';

function Footer() {
    return (
        <footer className="footer">
            <div className="links">
                <h2 className="links__heading">Follow SpaceX</h2>
                <ul className="links__list">
                    <li className="links__li">
                        <a className="links__link" href="www.twitter.com" target="_blank">
                            Twitter
                        </a>
                    </li>
                    <li className="links__li">
                        <a className="links__link" href="www.youtube.com" target="_blank">
                            Youtube
                        </a>
                    </li>
                    <li className="links__li">
                        <a className="links__link" href="www.flickr.com" target="_blank">
                            Flickr
                        </a>
                    </li>
                    <li className="links__li">
                        <a className="links__link" href="www.instagram.com" target="_blank">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
            <span className="footer__copyright">2018 Space Exploration Technologies Corp.</span>
        </footer>
    );
};

export default Footer;