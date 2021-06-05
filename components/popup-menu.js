import React, { useContext, Fragment, useRef } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="show-overlay-nav">
      <div className="popup popup__menu">
        <a
          href=""
          id="close-popup"
          onClick={handleMenuClick}
          className="close-popup"
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link href="/">
                  <a>
                    <img src={LogoImage.light} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popup-inner">
                <nav
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            undefined !== links.subItems
                              ? "menu-item-has-children"
                              : ""
                          }`}
                        >
                          <Link href={links.url}>
                            <a>{links.name}</a>
                          </Link>
                          {undefined !== links.subItems ? (
                            <Fragment>
                              <button
                                onClick={(e) => {
                                  menuEl.current
                                    .querySelectorAll(".sub-menu")
                                    .forEach((item) => {
                                      item.classList.remove("show");
                                    });

                                  let clickedItem = e.currentTarget.parentNode;
                                  clickedItem
                                    .querySelector(".sub-menu")
                                    .classList.toggle("show");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="sub-menu">
                                {links.subItems.map((subLinks, index) => (
                                  <li key={index}>
                                    <Link href={subLinks.url}>
                                      <a>{subLinks.name}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Fragment>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-xs-12 text-center text-md-left">
              <ul className="footer__contacts">
                <li>Phone: +62 812 8001 0723</li>
                <li>Email: info@bataviacrypto.com</li>
                <li>
                  Address:Glodok Harco Baru lt. 6  (Foodcourt Area), Jakarta, Indonesia
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="popUp_social text-center text-md-right">
                <ul>
                  <li>
                    <a href="https://bscscan.com/token/0x4abDF364A9aDa13c600498cAdf4f1a187C695Dc9">
                      <i className="fa fa-btc"></i>Smart Contract
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/BataviaCrypto/BEP20-Contract">
                      <i className="fa fa-github"></i>Github
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/bataviacrypto">
                      <i className="fa fa-telegram"></i>Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
