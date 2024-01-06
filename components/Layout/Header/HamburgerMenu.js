import React, { useRef } from "react";
import { Router } from "next/router";

import NavLink from "./NavLink";

function HamburgerMenu() {
  const menuRef = useRef();

  // Toggle
  const toggleMenuHandler = () => {
    menuRef.current.classList.toggle("is-active");
  };
  // Close
  Router.events.on("routeChangeStart", () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("is-active");
    }
  });

  return (
    <div className="menu" ref={menuRef}>
      <div className="menu__wrap">
        <button
          className="menu__ham"
          type="button"
          onClick={toggleMenuHandler}
          title="Open menu"
        >
          <div className="hamburger" aria-hidden="true">
            <div className="hamburger__box">
              <div className="hamburger__inner"></div>
            </div>
          </div>
        </button>
        <nav className="menu__nav">
          <NavLink href="/" activeClassName="active">
            <a>Home</a>
          </NavLink>
          <NavLink href="/posts" activeClassName="active">
            <a>Articles</a>
          </NavLink>
          <NavLink href="/works" activeClassName="active">
            <a>Works</a>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default React.memo(HamburgerMenu);
