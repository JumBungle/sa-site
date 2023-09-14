import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pages = ["work", "about", "contact"];

  const navItems = pages.map((page) => (
    <Link
      key={page}
      className="hover-underline-animation nav-links"
      to={"/" + page}
      onClick={toggleMenu}
    >
      {page}
    </Link>
  ));

  return (
    <div className="header">
      <Link onClick={closeMenu} className="home-link" to="/">
        Shanahan Architects
      </Link>
      <nav>{navItems}</nav>
      <button onClick={toggleMenu} className="menu-toggler">
        <i className={`fa-solid fa-${isOpen ? "xmark" : "bars"} fa-xl`}></i>
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link onClick={closeMenu} className="home-link" to="/">
          Shanahan Architects
        </Link>
        {navItems}

        <div className="mobile-only mobile-contact-btns">
          <a href="tel:093793718">
            <i className="fa-solid fa-phone fa-lg" />
          </a>
          <a href="mailto:info@shanahanarchitects.co.nz">
            <i className="fa-solid fa-envelope fa-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
