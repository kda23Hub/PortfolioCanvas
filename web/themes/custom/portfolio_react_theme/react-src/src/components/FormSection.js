import React from 'react';

const FormSection = () => {
  return (
    <section className="section">
      <h2 className="section-title">Contact Form</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default FormSection;
