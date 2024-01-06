import { useEffect, useRef, useState } from "react";

export default function DarkModeButton(props) {
  const parentRef = useRef();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (!isFirstLoad) return;

    const dataJSON = localStorage.getItem("isDarkMode");
    const data = JSON.parse(dataJSON);

    setDarkMode(data === true);

    setIsFirstLoad(false);
  }, [isFirstLoad]);

  const setDarkMode = (isDarkMode) => {
    localStorage.setItem("isDarkMode", isDarkMode + "");

    document.documentElement.setAttribute(
      "data-color-scheme",
      isDarkMode ? "dark" : "light"
    );
  };

  const darkModeHandler = () => {
    parentRef.current.classList.add("anim-ok");
    setDarkMode(true);
  };
  const lightModeHandler = () => {
    parentRef.current.classList.add("anim-ok");
    setDarkMode(false);
  };

  return (
    <div ref={parentRef} className="darkmode o-drop-in">
      <button
        className="darkmode__bttn darkmode__bttn--dark"
        type="button"
        onClick={darkModeHandler}
        title="Dark Mode"
      >
        <MoonSVG bg="var(--blue-low)" />
      </button>
      <button
        className="darkmode__bttn darkmode__bttn--light"
        type="button"
        onClick={lightModeHandler}
        title="Light Mode"
      >
        <SunSVG bg="var(--orange-med)" />
      </button>
    </div>
  );
}

/**
 * Sun / Moon SVGs
 */

const MoonSVG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.36 117.89">
      <path
        d="M59,117.89a58.86,58.86,0,0,0,45.79-21.82,2.77,2.77,0,0,0-2.67-4.46A46.18,46.18,0,0,1,70.58,6.1,2.76,2.76,0,0,0,69.72,1,58.95,58.95,0,1,0,59,117.89Z"
        fill={props.bg}
      />
    </svg>
  );
};

const SunSVG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.49 176.49">
      <path
        d="M135,88.25c0,25.48-20.93,46.13-46.75,46.13S41.49,113.73,41.49,88.25,62.43,42.11,88.25,42.11,135,62.77,135,88.25Z"
        fill={props.bg}
      />
      <path
        d="M88.25,8V22.59"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M88.25,153.9v14.59"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M31.49,31.49,41.85,41.85"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M134.64,134.64,145,145"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M8,88.25H22.59"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M153.9,88.25h14.59"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M31.49,145l10.36-10.36"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M134.64,41.85,145,31.49"
        fill={props.bg}
        stroke={props.bg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
};
