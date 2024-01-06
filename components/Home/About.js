import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

import AboutTypewriter from "./AboutTypewriter";
import IconList from "../UI/Icons/IconList";

export default function About(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="t-about-intro">
        <p className="t-about-intro__asl o-minitit">{t("about-asl")}</p>
        <h3 className="t-about-intro__typewriter o-subtitle">
          <span>
            <AboutTypewriter />
          </span>
        </h3>
        <p className="t-about-intro__paragraph">
          <Trans i18nKey="common:about-intro" components={[<br key="0" />]} />
        </p>
      </div>
      <div className="t-about-tech">
        <div className="t-about-tech__stack about-tech__stack--use">
          <h3 className="o-title o-title--short">{t("about-use-title")}</h3>
          <IconList
            isStack
            icons={[
              "react",
              "typescript",
              "nextjs",
              "wordpress",
              "webpack",
              "sass",
              "graphql",
              "redux",
            ]}
          />
        </div>
        <div className="t-about-tech__stack about-tech__stack--study">
          <h3 className="o-title o-title--short">{t("about-study-title")}</h3>
          <IconList isStack icons={["express", "nodejs", "mongodb"]} />
        </div>
      </div>
    </>
  );
}
