import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

import PageTitle from "./Second/PageTitle";
import Container from "../UI/Container";
import LinkButton from "../UI/LinkButton";

export default function Error404() {
  const { t } = useTranslation("common");

  const breadcrumbs = [{ name: "404", url: null }];

  return (
    <>
      <NextSeo title={"404"} />
      <PageTitle title={t("404-title")} breadcrumbs={breadcrumbs} />
      <Container type="second" width="thin">
        <div className="t-404">
          <h2 className="t-404__subtitle o-subtitle">
            <Trans
              i18nKey="common:404-subtitle"
              components={[<br key="0" />]}
            />
          </h2>
          <p className="t-404__text">
            <Trans i18nKey="common:404-text" components={[<br key="0" />]} />
          </p>
          <div className="t-404__bttn">
            <LinkButton href="/" color="orange">
              {t("404-button")}
            </LinkButton>
          </div>
        </div>
      </Container>
    </>
  );
}
