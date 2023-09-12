import { Link } from "react-router-dom";

const pages = ["work", "about", "contact"];
const navItems = pages.map((page) => (
  <Link key={page} className="hover-underline-animation" to={"/" + page}>
    {page}
  </Link>
));

function Header() {
  return (
    <div className="header">
      <Link className="home-link" to="/">
        Shanahan Architects
      </Link>
      <nav>{navItems}</nav>
    </div>
  );
}

export default Header;
