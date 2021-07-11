/* eslint-disable @next/next/no-img-element */
import useTranslation from "next-translate/useTranslation";
import LinkButton from "../UI/LinkButton";
import Obfuscate from "react-obfuscate";

import HeroImage from "../../svg/vincent-hero.svg";
import Hill from "../UI/Animations/Hill";

export default function Hero(props) {
    const { t } = useTranslation("common");

    return (
        <section className="t-hero">
            <div className="t-hero__wrap">
                <HeroImage
                    className="t-hero__img"
                    title={t("hero-alt")}
                    style={{ maxWidth: 205 }}
                />
                <div className="t-hero__txtbox">
                    <h1>{t("hero-title")}</h1>
                    <p>{t("hero-intro")}</p>
                    <p>{t("hero-cta")}</p>
                    <div className="t-hero__bttnbox">
                        <Obfuscate className="o-bttn o-bttn--blue" email="seanv@hotmail.co.nz">
                            {t("hero-contact-button")}
                        </Obfuscate>
                        {/* <LinkButton href="#">
                            {t("hero-resume-button")}
                        </LinkButton> */}
                    </div>
                </div>
            </div>
            <div className="t-hero-hills">
                <div className="t-hero-hills__left">
                    <Hill height={108} color="blue" />
                    <Hill height={25} color="orange" />

                    <Hill height={73} color="blue" />
                    <Hill height={20} color="orange" />
                    <Hill height={61} color="blue" />
                </div>

                <div className="t-hero-hills__right">
                    <Hill height={32} color="orange" isFacingLeft />
                    <Hill height={108} color="blue" isFacingLeft />

                    <Hill height={60} color="blue" isFacingLeft />
                    <Hill height={27} color="orange" isFacingLeft />
                </div>
            </div>
        </section>
    );
}
