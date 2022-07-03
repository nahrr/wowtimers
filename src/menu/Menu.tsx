import Footer from "../footer/Footer";
import style from "./Menu.module.css";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <>
      <nav className={style.wrapper}>
        <MenuCard path="/ZulAman" styleName="za" title="Zul'Aman" />
        <MenuCard
          path="/Wotlk"
          styleName="wotlk"
          title="Wrath of the lich king"
        />
      </nav>
      <Footer />
    </>
  );
};

export default Menu;
