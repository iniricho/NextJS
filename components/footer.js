import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
              The BTV Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, and Burn
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                 Glodok Harco baru floor 6 ( Near Foodcourt Area )
                <br />
                Jakarta, Indonesia
              </p>
              <p>P: +621 8128 0010 723</p>
              <p>
                E: <a href="mailto:info@bataviacrypto.com">info@bataviacrypto.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social & Resources</h3>
              <ul>
              <li>
                  <a href="https://bscscan.com/token/0x4abDF364A9aDa13c600498cAdf4f1a187C695Dc9">
                    <i className="fa fa-btc"></i>Smart Contract
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-certificate"></i>Whitepaper
                  </a>
                </li>
                <li>
                  <a href="https://poocoin.app/tokens/0x4abdf364a9ada13c600498cadf4f1a187c695dc9">
                    <i className="fa fa-bar-chart "></i>Poocoin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/BataviaCrypto/BEP20-Contract">
                    <i className="fa fa-github"></i>Github
                  </a>
                </li>
                <li>
                  <a href="https://t.me/bataviacrypto">
                    <i className="fa fa-telegram "></i>Telegram
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              Batavia Crypto
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
