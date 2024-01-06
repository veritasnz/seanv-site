import { useRef } from "react";

import Icon from "../../UI/Icons/Icon";
import SocialLinks from "../SocialLinks";

export default function SocialDropdown() {
  const parentRef = useRef();

  // Toggle
  const toggleMenuHandler = () => {
    if (parentRef.current.classList.contains("is-open")) {
      // Close
      parentRef.current.classList.remove("is-open");
      parentRef.current.classList.add("is-closed");
    } else {
      // Open
      parentRef.current.classList.remove("is-closed");
      parentRef.current.classList.add("is-open");
    }
  };

  return (
    <>
      <div ref={parentRef} className="social-dropdown">
        <div className="social-dropdown__wrap">
          <button
            className="social-dropdown__open"
            onClick={toggleMenuHandler}
            type="button"
            title="Open drawer"
          >
            <Icon name="loudspeaker" color="currentColor" />
            <Icon name="chevronup" color="currentColor" />
          </button>
          <div className="social-dropdown__content">
            <SocialLinks
              className="social-dropdown__list"
              color="currentColor"
              hasTooltip={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
