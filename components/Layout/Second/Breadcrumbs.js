import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Breadcrumbs(props) {
  const { data } = props;
  const { t } = useTranslation("common");

  const breadcrumbContent = [];

  // Add home crumb
  breadcrumbContent.push(
    <li key={"home"} className="breadcrumbs__item">
      <Link href="/">{t("home-title")}</Link>
    </li>
  );

  // Push rest of crumbs
  breadcrumbContent.push(
    data.map((crumb) => {
      let crumbInner = crumb.name;

      if (crumb.url !== null) {
        crumbInner = <Link href={crumb.url}>{crumb.name}</Link>;
      }

      return (
        <li key={crumb.name} className="breadcrumbs__item">
          {crumbInner}
        </li>
      );
    })
  );

  return <ul className="breadcrumbs">{breadcrumbContent}</ul>;
}
