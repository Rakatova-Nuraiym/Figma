import scss from "./header.module.scss";

import logo from "../../../assets/logo.png";
import { useState } from "react";
const Header = () => {
  const [isBurgetMenu, setIsBurgetMenu] = useState(false);
  console.log(isBurgetMenu);
  const links = [
    {
      name: "Блогерам",
      href: "/",
    },
    {
      name: "Рекламодателям",
      href: "/",
    },
    {
      name: "Кейсы",
      href: "/",
    },
    {
      name: "Контакты",
      href: "/",
    },
  ];
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <img src={logo} alt="logo" />
            </div>
            <nav className={scss.nav}>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.name} </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={scss.right}>
            <button>Оставить заявку</button>
            <div className={scss.burger__button}>
              <label>
                <input
                  type="checkbox"
                  checked={isBurgetMenu}
                  onChange={() => setIsBurgetMenu(!isBurgetMenu)}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div
              className={
                isBurgetMenu
                  ? `${scss.burger_menu} ${scss.active}`
                  : `${scss.burger_menu} `
              }
            >
              <nav>
                {links.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.name} </a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
