import Link from "next/link";

export default function LinkButton(props) {
    const { color = "orange", href, children } = props;

    return (
        <Link href={href}>
            <a className={`o-bttn o-bttn--${color}`}>{children}</a>
        </Link>
    );
}
