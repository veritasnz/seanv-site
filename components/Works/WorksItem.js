import React from "react";
import Image from "next/image";
import Link from "next/link";

import Icon from "../UI/Icons/Icon";
import IconList from "../UI/Icons/IconList";

const createLink = ({ icon, url, tooltip }) => {
  const iconComponent = <Icon name={icon} tooltip={tooltip} />;
  const isExternal = url.includes("http"); // weak external link check

  if (isExternal) {
    return (
      <li className={"icon-list__item"} key={icon}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {iconComponent}
        </a>
      </li>
    );
  } else {
    return (
      <li className={"icon-list__item"} key={icon}>
        <Link href={url}>
          <a>{iconComponent}</a>
        </Link>
      </li>
    );
  }
};

export default function WorksItem(props) {
  const {
    name,
    url,
    thumbnailURL,
    placeholderData,
    type,
    stack,
    summary,
    links,
  } = props.work;

  /**
   * Title
   */
  let titleContents = name;

  if (url) {
    // weak external link check
    if (url.includes("http")) {
      titleContents = (
        <a
          href={url}
          className="o-link"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          {name}
        </a>
      );
    } else {
      titleContents = (
        <Link href={url}>
          <a className="o-link">{name}</a>
        </Link>
      );
    }
  }

  /**
   * Stack
   */
  let stackContent = [];

  if (stack) {
    stackContent = (
      <div className="works-item__stack">
        <IconList icons={stack} isStack />
      </div>
    );
  }

  /**
   * Links
   */
  let linkContent = [];

  if (links.length > 0) {
    linkContent = (
      <div className="works-item__links">
        <span>Links:</span>
        <ul className="icon-list">
          {links.map((item) => {
            return createLink(item);
          })}
        </ul>
      </div>
    );
  }

  return (
    <li className="works-item">
      <div className="works-item__img">
        <div>
          {createPlaceholderSVG(placeholderData)}
          <Image
            src={thumbnailURL}
            alt={name}
            quality="100"
            layout="fill"
            type="png"
          />
        </div>
      </div>
      <div className="works-item__content">
        <div>
          <h3 className="works-item__title">{titleContents}</h3>
          <p className="works-item__type">({type})</p>
          {stackContent}
          <p className="works-item__summary">{summary}</p>
          {linkContent}
        </div>
      </div>
    </li>
  );
}

const createPlaceholderSVG = (svg) => {
  return React.createElement(
    svg[0],
    {
      ...svg[1],
      style: {
        ...svg[1].style,
        transform: ["scale(1.5)", svg[1].style.transform].join(" "),
        filter: "blur(40px)",
      },
    },
    svg[2].map((child) =>
      React.createElement(child[0], {
        key: [child[1].x, child[1].y].join(),
        ...child[1],
      })
    )
  );
};
