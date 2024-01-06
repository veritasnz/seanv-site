/**
 * Example taken from
 * https://gist.github.com/iamchristough/493c60112770058566d559e6860dc4c9
 */

import Express from "../../../svg/icons/express.svg";
import GraphQL from "../../../svg/icons/graphql.svg";
import Javascript from "../../../svg/icons/javascript.svg";
import MongoDB from "../../../svg/icons/mongodb.svg";
import NextJS from "../../../svg/icons/nextjs.svg";
import NodeJS from "../../../svg/icons/nodejs.svg";
import PHP from "../../../svg/icons/php.svg";
import ReactJS from "../../../svg/icons/react.svg";
import Redux from "../../../svg/icons/redux.svg";
import Sass from "../../../svg/icons/sass.svg";
import SVG from "../../../svg/icons/svg.svg";
import Typescript from "../../../svg/icons/typescript.svg";
import Wordpress from "../../../svg/icons/wordpress.svg";
import Webpack from "../../../svg/icons/webpack.svg";

export default function StackIcon(props) {
  const { name, color } = props;

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
    express: {
      component: <Express {...iconProps} />,
      defaultTooltip: "Express",
    },
    graphql: {
      component: <GraphQL {...iconProps} />,
      defaultTooltip: "GraphQL",
    },
    javascript: {
      component: <Javascript {...iconProps} />,
      defaultTooltip: "Javascript",
    },
    mongodb: {
      component: <MongoDB {...iconProps} />,
      defaultTooltip: "MongoDB",
    },
    nextjs: {
      component: <NextJS {...iconProps} />,
      defaultTooltip: "NextJS framework",
    },
    nodejs: {
      component: <NodeJS {...iconProps} />,
      defaultTooltip: "NodeJS",
    },
    php: {
      component: <PHP {...iconProps} />,
      defaultTooltip: "PHP",
    },
    react: {
      component: <ReactJS {...iconProps} />,
      defaultTooltip: "React",
    },
    redux: {
      component: <Redux {...iconProps} />,
      defaultTooltip: "Redux",
    },
    sass: {
      component: <Sass {...iconProps} />,
      defaultTooltip: "Styling with Sass",
    },
    svg: {
      component: <SVG {...iconProps} />,
      defaultTooltip: "Built with SVG",
    },
    typescript: {
      component: <Typescript {...iconProps} />,
      defaultTooltip: "Typescript",
    },
    webpack: {
      component: <Webpack {...iconProps} />,
      defaultTooltip: "Webpack bundler",
    },
    wordpress: {
      component: <Wordpress {...iconProps} />,
      defaultTooltip: "Wordpress CMS",
    },
  };

  const icon = icons[name];

  return (
    <div className="icon icon--stack">
      {icon.component}
      <span className="icon__tooltip" role="tooltip">
        {icon.defaultTooltip}
      </span>
    </div>
  );
}
