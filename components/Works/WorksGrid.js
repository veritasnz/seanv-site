import WorksItem from "./WorksItem";

export default function WorksGrid(props) {
  return (
    <ul className="works-grid">
      {props.works.map((item) => {
        return <WorksItem key={item.name} work={item} />;
      })}
    </ul>
  );
}
