function Contact() {
  return (
    <div className="content contact-page centered">
      <div className="row">
        <div className="col hide-on-mobile"></div>
        <div className="col">
          <h1>Let's Work Together</h1>
          <div className="text-container">
            <p>
              Further case studies available upon request.
              <br /> When emailing, please provide some information on your
              project or goals and we’ll be in touch.
            </p>
            <div className="contact-information-container">
              <a
                href="tel:093793718"
                className="contact-information hover-underline-animation"
              >
                <i className="fa-solid fa-phone fa-xl contact-icon" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:info@shanahanarchitects.co.nz"
                className="contact-information hover-underline-animation"
              >
                <i className="fa-solid fa-envelope fa-xl contact-icon" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
