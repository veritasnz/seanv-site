import Icon from "./Icon";
import StackIcon from "./StackIcon";

export default function IconList(props) {
  const { icons, isStack = false } = props;

  const listContent = icons.map((iconName) => {
    if (isStack) {
      return (
        <li key={iconName} className="icon-list__item">
          <StackIcon name={iconName} />
        </li>
      );
    } else {
      return (
        <li key={iconName} className="icon-list__item">
          <Icon name={iconName} />
        </li>
      );
    }
  });

  return <ul className="icon-list">{listContent}</ul>;
}
