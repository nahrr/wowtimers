import { Link } from "react-router-dom";
import style from "./Menu.module.css";

type Args = {
  path: string;
  styleName: string;
  title: string;
  disabled?: boolean;
};

const MenuCard = ({ path, styleName, title, disabled }: Args) => {
  if (disabled) {
    return (
      <Link to={path} className={`${style.link} ${style.disabledLink}`}>
        <div
          className={`${style.card} ${style[styleName]} ${style.disabledCard}`}
        >
          <p className={style.title}>{title}</p>
          <span className={style.disabledBanner}>TBA</span>
        </div>
      </Link>
    );
  }
  return (
    <Link to={path} className={style.link}>
      <div className={`${style.card} ${style[styleName]}`}>
        <p className={style.title}>{title}</p>
        {disabled && <span className={style.disabledBanner}>TBA</span>}
      </div>
    </Link>
  );
};
export default MenuCard;
