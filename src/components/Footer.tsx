function Footer() {
  return (
    <footer>
      <p className="hide-on-mobile">
        11 Hargreaves Street, Auckland CBD, Auckland 1011, New Zealand
      </p>
      <div className="footer-contact-btns hide-on-mobile">
        <a href="tel:093793718">
          <i className="fa-solid fa-phone contact-icon fa-lg" />
          (09) 379 3718
        </a>
        <a href="mailto:info@shanahanarchitects.co.nz">
          <i className="fa-solid fa-envelope contact-icon fa-lg" />
          info@shanahanarchitects.co.nz
        </a>
      </div>

      <div className="mobile-only mobile-contact-btns">
        <a
          href="https://goo.gl/maps/11wEP5JCf2UtUMqo8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-location-pin"></i>
        </a>
        <a href="tel:093793718">
          <i className="fa-solid fa-phone fa-lg" />
        </a>
        <a href="mailto:info@shanahanarchitects.co.nz&subject=Web Inquiry">
          <i className="fa-solid fa-envelope fa-lg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
