import React, { useContext } from "react";
import { externalLinks, internalLinks } from "../../../data/data";
import "./style.scss"
import { MenuContext } from "../menuManager/MenuManager";
import cn from "classnames"
function MenuContent() {
  const {open} = useContext(MenuContext)


  return (
    <>
      <div className="menu-holder">
        <main className={cn("menu-main", {open})}>
          <div className="nav-container">
            <ul className="nav-link">
              {internalLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url}>{link.component}</a>
                  <img src={link.img} alt="holy shit" />
                </li>
              ))}
            </ul>
            <ul className="social-link">
              {externalLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url}>{link.component}</a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default MenuContent;
