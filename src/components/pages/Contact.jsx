import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; 

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2hyk22s",    //  service id
        "template_5e9vm2k",   //  template ID
        form.current,
        "XVydLg47mvUwwSnRB"     //  public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Message not sent. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
