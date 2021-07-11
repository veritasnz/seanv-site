import Prism from "prism-react-renderer/prism";
import Highlight, { defaultProps } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-php"); // Add PHP support

export default function Code(props) {
    const { children: exampleCode, lang = "jsx" } = props;

    return (
        <Highlight
            {...defaultProps}
            code={exampleCode}
            language={lang}
            theme={shadesOfPurple}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}
