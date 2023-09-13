import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open: boolean) => !open);
  };

  const pages = ["work", "about", "contact"];
  const navItems = pages.map((page) => (
    <Link
      onClick={toggleMenu}
      key={page}
      className="hover-underline-animation"
      to={"/" + page}
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
        {isOpen ? (
          <i className="fa-solid fa-xmark fa-xl"></i>
        ) : (
          <i className="fa-solid fa-bars fa-xl"></i>
        )}
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link onClick={toggleMenu} className="home-link" to="/">
          Home
        </Link>
        {navItems}
      </div>
    </div>
  );
}

export default Header;
