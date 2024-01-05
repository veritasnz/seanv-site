import { useRouter } from "next/router";
import Link from "next/link";

import Icon from "../../UI/Icons/Icon";

export default function LangButton(props) {
  const router = useRouter();

  let oppositeLocale = "jp";
  let oppositeIconName = "nihongo";
  let title = "Switch to Japanese";

  if (router.locale == "jp") {
    oppositeLocale = "en";
    oppositeIconName = "english";
    title = "英語に切り替える";
  }

  return (
    <Link href={router.asPath} locale={oppositeLocale}>
      <a className="lang-button o-drop-in" title={title}>
        <Icon name={oppositeIconName} />
      </a>
    </Link>
  );
}
