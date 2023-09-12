import React from "react";

function ContactForm() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <>
      <div className="from-container">
        <h2>Get in Touch</h2>
        <form onSubmit={onSubmit}>
          <div className="form-section">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-section">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-section">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" required />
          </div>
          <div className="form-section">
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" required />
          </div>
          <button type="submit">{formStatus}</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
