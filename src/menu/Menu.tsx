import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <nav className={style.wrapper}>
        <Link to="/ZulAman" className={style.link}>
          <div className={`${style.card} ${style.za}`}>
            <p className={`${style.title} ${style.zaTitle}`}>Zul'Aman</p>
          </div>
        </Link>
        <Link to="/Wotlk" className={style.link}>
          <div className={`${style.card} ${style.wotlk}`}>
            <p className={style.title}> Wrath of the lich king</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Menu;
