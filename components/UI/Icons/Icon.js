/**
 * Example taken from
 * https://gist.github.com/iamchristough/493c60112770058566d559e6860dc4c9
 */

import Anchor from "../../../svg/icons/anchor.svg";
import ArrowRight from "../../../svg/icons/arrowright.svg";
import Article from "../../../svg/icons/article.svg";
import Code from "../../../svg/icons/code.svg";
import ChevronUp from "../../../svg/icons/chevronup.svg";
import Contact from "../../../svg/icons/contact.svg";
import English from "../../../svg/icons/english.svg";
import ExternalArrow from "../../../svg/icons/externalarrow.svg";
import Filter from "../../../svg/icons/filter.svg";
import Github from "../../../svg/icons/github.svg";
import Japanese from "../../../svg/icons/japanese.svg";
import LinkedIn from "../../../svg/icons/linkedin.svg";
import Loudspeaker from "../../../svg/icons/loudspeaker.svg";
import Nihongo from "../../../svg/icons/nihongo.svg";
import Other from "../../../svg/icons/other.svg";
import Personal from "../../../svg/icons/personal.svg";
import Twitter from "../../../svg/icons/twitter.svg";

export default function Icon(props) {
  const { name, tooltip, color } = props;

  let classProp = "icon__svg";
  let styleProp = null;

  if (color) {
    classProp += " icon__svg--colored";
    styleProp = { color: color };
  }

  const iconProps = {
    className: classProp,
    style: styleProp,
  };

  const icons = {
    anchor: <Anchor {...iconProps} />,
    arrowright: <ArrowRight {...iconProps} />,
    article: <Article {...iconProps} />,
    code: <Code {...iconProps} />,
    contact: <Contact {...iconProps} />,
    chevronup: <ChevronUp {...iconProps} />,
    english: <English {...iconProps} />,
    externalarrow: <ExternalArrow {...iconProps} />,
    filter: <Filter {...iconProps} />,
    github: <Github {...iconProps} />,
    japanese: <Japanese {...iconProps} />,
    linkedin: <LinkedIn {...iconProps} />,
    loudspeaker: <Loudspeaker {...iconProps} />,
    nihongo: <Nihongo {...iconProps} />,
    other: <Other {...iconProps} />,
    personal: <Personal {...iconProps} />,
    twitter: <Twitter {...iconProps} />,
  };

  const icon = icons[name];

  return (
    <div className={`icon ${tooltip && "icon--tooltip"}`}>
      {icon}
      {tooltip && (
        <span className="icon__tooltip" role="tooltip">
          {tooltip}
        </span>
      )}
    </div>
  );
}
