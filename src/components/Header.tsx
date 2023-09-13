import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pages = ["work", "about", "contact"];

  const navItems = pages.map((page) => (
    <Link
      key={page}
      className="hover-underline-animation"
      to={"/" + page}
      onClick={toggleMenu}
    >
      {page}
    </Link>
  ));

  return (
    <div className="header">
      <Link className="home-link" to="/">
        Shanahan Architects
      </Link>
      <nav>{navItems}</nav>
      <button onClick={toggleMenu} className="menu-toggler">
        <i className={`fa-solid fa-${isOpen ? "xmark" : "bars"} fa-xl`}></i>
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>{navItems}</div>
    </div>
  );
}

export default Header;
