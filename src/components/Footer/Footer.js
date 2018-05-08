import React from 'react';

import './Footer.sass';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__heading">Follow SpaceX</h2>
            <ul className="footer__links">
                <li className="footer__link">
                    <a href="www.twitter.com" target="_blank">
                        Twitter
                    </a>
                </li>
                <li className="footer__link">
                    <a href="www.youtube.com" target="_blank">
                        Youtube
                    </a>
                </li>
                <li className="footer__link">
                    <a href="www.flickr.com" target="_blank">
                        Flickr
                    </a>
                </li>
                <li className="footer__link">
                    <a href="www.instagram.com" target="_blank">
                        Instagram
                    </a>
                </li>
            </ul>
            <span className="footer__copyright">2018 Space Exploration Technologies Corp.</span>
        </footer>
    );
};

export default Footer;