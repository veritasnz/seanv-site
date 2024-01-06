import Link from "next/link";

export function ATag(props) {
  const { href, children } = props;
  const isExternal = href.includes("http"); // weak external link check

  if (isExternal) {
    return (
      <a
        className="o-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className="o-link">{children}</a>
      </Link>
    );
  }
}
