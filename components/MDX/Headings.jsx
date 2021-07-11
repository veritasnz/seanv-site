/**
 * Code replicated from
 * https://tomekdev.com/posts/anchors-for-headings-in-mdx
 */

import Icon from "../UI/Icons/Icon";

function getAnchorID(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/[ ]/g, "-");
}

function getLink(link) {
    return (
        <a href={link}>
            <Icon name="anchor" />
        </a>
    );
}

export function H2({ children }) {
    const anchor = getAnchorID(children);
    const link = `#${anchor}`;

    return (
        <h2 id={anchor} className="o-anchor-heading">
            {children}
            {getLink(link)}
        </h2>
    );
}

export function H3({ children }) {
    const anchor = getAnchorID(children);
    const link = `#${anchor}`;

    return (
        <h3 id={anchor} className="o-anchor-heading">
            {children}
            {getLink(link)}
        </h3>
    );
}
