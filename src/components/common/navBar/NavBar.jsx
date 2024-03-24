import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import { menuNavigation } from "../../../router/menuNavigation";
import "./NavBar.css";
import mayjuLogoBlanco from "../../../images/mayjuLogoBlanco.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            className="logo"
            src={mayjuLogoBlanco}
            alt="Logo Mayju en color blanco"
          />
        </Link>
        <ul className="categories">
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              {text}
            </Link>
          ))}
        </ul>

        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
