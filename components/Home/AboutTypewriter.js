import useTranslation from "next-translate/useTranslation";
import Typewriter from "typewriter-effect";

export default function AboutTypewriter() {
  const { t } = useTranslation("common");

  const base = t("about-typewriter-base");
  const translationArray = t(
    "about-typewriter-content",
    { count: 1 },
    { returnObjects: true }
  );

  const stringsToType = translationArray.map((item) => {
    return item.text;
  });

  const typewriterOptions = {
    delay: 90, // speed up insertion
    deleteSpeed: 40, // speed up deletion
    strings: stringsToType,
    autoStart: true,
    loop: true,
    cursor: "_",
  };

  return (
    <>
      {base}
      <Typewriter options={typewriterOptions} />
    </>
  );
}
