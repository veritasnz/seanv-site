import React from "react";

import SocialLinks from "../SocialLinks";
import SocialDropdown from "./SocialDropdown";
import DarkModeButton from "./DarkModeButton";
import HamburgerMenu from "./HamburgerMenu";
import LangButton from "./LangButton";

function Header() {
    return (
        <header className="header o-drop-in">
            <SocialDropdown />
            <div className="header__options">
                <LangButton />
                <DarkModeButton />
                <HamburgerMenu />
            </div>
        </header>
    );
}

export default React.memo(Header);
