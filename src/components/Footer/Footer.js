import React from 'react';
import "./Footer.scss"

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer-inner">
            <header className="footer-header">
                <a className="header-link" href="#">
                    Movies
                </a>
                <a className="header-link" href="#">
                    Series
                </a>
            </header>

            <section className="links-section">
                <a className="link" href="#">
                    Watch
                </a>
                <a className="link" href="#">
                    About us
                </a>
                <a className="link" href="#">
                    Contact us
                </a>
                <a className="link" href="#">
                    Newsletter
                </a>
                <a className="link" href="#">
                    New here?
                </a>
            </section>

            <section className="copyright-section">
                <p>2022 All rights reserved</p>
                <p>You can find here the best movies and series to watch.</p>

                <div className="policy">
                    <a className="link">Privacy Policy</a>
                    <a className="link">Terms and imprint</a>
                </div>
            </section>
            </div>
        </footer>
    )
}

export default Footer;