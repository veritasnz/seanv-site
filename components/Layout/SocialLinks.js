import Obfuscate from "react-obfuscate";

import Icon from "../UI/Icons/Icon";

export default function SocialLinks(props) {
  const { color = "inherit", hasTooltip = true, ...otherProps } = props;

  return (
    <ul {...otherProps}>
      {/* <li>
        <a
          href="https://www.linkedin.com/in/seanveritas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linked In"
        >
          <Icon
            name="linkedin"
            tooltip={hasTooltip ? "LinkedIn" : false}
            color={color}
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/veritas_nz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Icon
            name="twitter"
            tooltip={hasTooltip ? "Twitter" : false}
            color={color}
          />
        </a>
      </li> */}
      <li>
        <a
          href="https://github.com/veritasnz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Icon
            name="github"
            tooltip={hasTooltip ? "Github" : false}
            color={color}
          />
        </a>
      </li>
      <li>
        <Obfuscate email={process.env.NEXT_PUBLIC_EMAIL} aria-label="Email">
          <Icon
            name="contact"
            tooltip={hasTooltip ? "Email" : false}
            color={color}
          />
        </Obfuscate>
      </li>
    </ul>
  );
}
