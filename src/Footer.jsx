import React from "react";
import './styles/Main-Page-Styles.css';
import logo from './images/main-logo.png';
import instagram from './images/Instagram (instagram).png';
import youtube from './images/Youtube (优兔).png';
import twitter from './images/Twitter (推特).png';
import facebook from './images/Facebook (脸书).png';
import instagram1 from "./images/Instagram-one (instagram).png";
import footer_img from './images/footer-img.png';

const Footer = () => {
    function instagram_click() {
        document.location.href = "https://www.instagram.com";
    }

    function facebook_click() {
        document.location.href = "https://www.facebook.com";
    }

    function youtube_click() {
        document.location.href = "https://www.youtube.com";
    }

    function twitter_click() {
        document.location.href = "https://www.twitter.com";
    }

    return (
        <div className="footer">
            <div className="footer-text">
                <div className=" footer-column">
                    <p className="footer-title">Компанія</p><br></br>
                    <div>
                        <div className="footer-text-margin-bottom footer-text-margin-top"><a className="footer-button"
                            href="index1.html">Про нас</a></div>
                        <div className="footer-text-margin-bottom"><a class="footer-button" href="/Contact">Допомога</a>
                        </div>
                        <div className="footer-text-margin-bottom"><a class="footer-button" href="index1.html">Поради</a></div>
                        <div><a className="footer-button" href="index1.html">Для
                            інвесторів</a>
                        </div>
                    </div>
                </div>
                <div className=" footer-column">
                    <p className="footer-title">Арендатори/<br></br>Покупці</p>
                    <div>
                        <div className="footer-text-margin-bottom footer-text-margin-top"><a className="footer-button"
                            href="/Sign">Увійти</a></div>
                        <div className="footer-text-margin-bottom"><a class="footer-button" href="index1.html">Поради</a></div>
                        <div><a className="footer-button" href="index1.html">Менеджер
                        </a>
                        </div>
                    </div>
                </div>
                <div className="footer-column">
                    <p className="footer-title">Арендодавці/<br></br>Продавці</p>
                    <div>
                        <div className="footer-text-margin-bottom footer-text-margin-top"><a className="footer-button"
                            href="/Sign">Увійти</a></div>
                        <div><a className="footer-button" href="index1.html">Поради</a></div>
                    </div>
                </div>
            </div>
            <img className="footer-img" src={footer_img}></img>
            <img className="footer-logo" src={logo}></img>
            <div className="soc-networks">
                <img className="click" src={instagram} onClick={instagram_click}></img>
                <img className="click" src={youtube} onClick={youtube_click}></img>
                <img className="click" src={twitter} onClick={twitter_click}></img>
                <img className="click" src={facebook} onClick={facebook_click}></img>
                <img className="click" src={instagram1} onClick={instagram_click}></img>
            </div>
        </div>
    )
}

export default Footer;