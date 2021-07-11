import Link from "next/link";
import Icon from "../../UI/Icons/Icon";

export default function Category(props) {
    const { slug, name, noText } = props;

    const path = {
        pathname: "/posts",
        query: { filterBy: slug },
    };

    return (
        <Link href={path}>
            <a className="cat">
                <Icon name={slug} />
                {noText ? "" : <span>{name}</span>}
            </a>
        </Link>
    );
}
