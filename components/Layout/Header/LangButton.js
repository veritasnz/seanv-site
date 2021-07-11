import { useRouter } from "next/router";
import Link from "next/link";

import Icon from "../../UI/Icons/Icon";

export default function LangButton(props) {
    const router = useRouter();

    let oppositeLocale = "jp";
    let oppositeIconName = "nihongo";

    if (router.locale == "jp") {
        oppositeLocale = "en";
        oppositeIconName = "english";
    }

    return (
        <Link href={router.asPath} locale={oppositeLocale}>
            <a className="lang-button">
                <Icon name={oppositeIconName} />
            </a>
        </Link>
    );
}
