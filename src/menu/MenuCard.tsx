import { Link } from "react-router-dom";
import style from "./Menu.module.css";

type Args = {
  path: string;
  styleName: string;
  title: string;
};

const MenuCard = ({ path, styleName, title }: Args) => {
  return (
    <Link to={path} className={style.link}>
      <div className={`${style.card} ${style[styleName]}`}>
        <p className={style.title}>{title}</p>
      </div>
    </Link>
  );
};
export default MenuCard;
