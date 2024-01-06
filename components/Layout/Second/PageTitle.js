import Hill from "../../UI/Animations/Hill";
import Breadcrumbs from "./Breadcrumbs";

export default function PageTitle(props) {
  const { title, breadcrumbs } = props;

  return (
    <header className="page-title">
      <h1 className="page-title__title">{title}</h1>
      <div className="page-title__wrap">
        <div className="page-title__crumbs">
          <Breadcrumbs data={breadcrumbs} />
        </div>
        <div className="page-title__hills">
          <Hill height={32} color="orange" isFacingLeft />
          <Hill height={108} color="blue" isFacingLeft />

          <Hill height={60} color="blue" isFacingLeft />
          <Hill height={27} color="orange" isFacingLeft />
        </div>
      </div>
    </header>
  );
}
