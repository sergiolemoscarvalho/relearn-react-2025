import React, { useState } from 'react';
import capa from './images/capa.jpg';
import capaMobile from './images/capa-mobile.jpg';
import logotipo from './images/logotipo-lar.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg--header d-flex flex-column align-items-center navbar">
            <img src={capa} className="img-fluid d-none d-lg-block" alt="" />
            <img src={capaMobile} className="img-fluid d-md-none" alt="" />
            
            <nav className="naavbar ">
                <div className="container">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <a className="navbar-brand text--white" href="#" target="">
                            <img src={logotipo} className="my-2 img-fluid d-none d-lg-block" alt="Logotipo" />
                            <img src={logotipo} className="img-fluid d-lg-none" alt="Logotipo" />
                        </a>
                        <div className="d-none d-md-inline-block"><b>Relatório Sustentabilidade 2024</b></div>
                        <div className="d-flex align-items-center gap-md-4">
                            <button className="d-md-block d-none bt--leiamais btnDownloadJS" role="button">Download</button>
                            <div className="hamburger-menu ">
                                <input id="menu__toggle" type="checkbox" checked={isMenuOpen} onChange={toggleMenu}  />
                                <label className="menu__btn scroll-link" htmlFor="menu__toggle" >
                                    <span></span>
                                </label>
                                <div className="menu__box d-flex align-items-start justify-content-center pt-3">
                                    <ul className="menu__items">
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#mensagem">
                                                <span id="m1"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#destaques-2024">
                                                <span id="m2"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#energia">
                                                <span id="m3"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#identidade">
                                                <span id="m4"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#pessoas">
                                                <span id="m5"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#dupla-materialidade">
                                                <span id="m6"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#nossa-agenda">
                                                <span id="m7"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu__item scroll-link" onClick={closeMenu} href="#nossos-resultados">
                                                <span id="m8"></span>
                                            </a>
                                        </li>
                                        <li><button className="bt--leiamais2 btnDownloadJS" role="button">Download</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}