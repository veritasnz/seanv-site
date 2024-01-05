import React from "react";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

import Vincent from "../../../svg/vincent-footer.svg";
import Clouds from "../../UI/Animations/Clouds";
import Hill from "../../UI/Animations/Hill";
import SocialLinks from "../SocialLinks";

function Footer() {
  const { t } = useTranslation("common");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Clouds count="6" />
      <div className="footer__wrap">
        <div className="footer__hill-1">
          <Hill height={180} color="blue" />
          <Hill height={110} color="orange" />
        </div>

        <div className="footer__content">
          <Vincent className="footer__img" title={t("footer-image-alt")} />
          <p className="footer__text">
            <Trans i18nKey="common:footer-text" components={[<br key="0" />]} />
          </p>
          <SocialLinks className="footer__social" />
          <p className="footer__copy">
            {`${t("footer-copy")} ©︎ ${currentYear}`}
          </p>
        </div>

        <div className="footer__hill-2">
          <Hill height={170} color="blue" isFacingLeft />
          <Hill height={50} color="orange" isFacingLeft />
          <Hill height={100} color="blue" isFacingLeft />
        </div>

        <div className="footer__sp-hills">
          <Hill height={80} color="blue" />
          <Hill height={50} color="orange" isFacingLeft />
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
