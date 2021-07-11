export function ATag(props) {
    return (
        <a className="o-link" {...props}>
            {props.children}
        </a>
    );
}
