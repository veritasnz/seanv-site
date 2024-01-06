import Clouds from "./Animations/Clouds";

export default function Container(props) {
  const { title, type = "second", isShortTitle = false, width = null } = props;

  return (
    <section className={`o-container o-container--${type}`}>
      {type === "first" && <Clouds count="2" />}
      <div className={`o-wrapper ${width && `o-wrapper--${width}`}`}>
        {title && (
          <h2 className={`o-title ${isShortTitle && "o-title--short"}`}>
            {title}
          </h2>
        )}
        {props.children}
      </div>
    </section>
  );
}
