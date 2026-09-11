import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setDone(false);
    setError("");
    setSending(true);

    emailjs
      .sendForm(
        "service_0ryzg09",
        "template_lrnsqqr",
        formRef.current,
        {
          publicKey: "hJJ8HXntIIhp1kQda",
        }
      )
      .then(
        (result) => {
          console.log("EMAIL SENT:", result.text);

          setDone(true);
          setSending(false);

          formRef.current.reset();
        },
        (error) => {
          console.log("EMAIL FAILED:", error);

          setError(
            "Unable to send the message right now. Please try again."
          );

          setSending(false);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h2 data-aos="fade-up">Let's Connect</h2>

            <p className="contact-intro" data-aos="fade-up">
              Have a question, opportunity, or project in mind?
              Feel free to send me a message.
            </p>

            <form onSubmit={sendEmail} ref={formRef}>
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Your Name"
                className="form-control"
                name="user_name"
                required
              />

              <div className="row">
                <div className="col-sm-6">
                  <input
                    data-aos="fade-up"
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    name="user_email"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    data-aos="fade-up"
                    type="tel"
                    placeholder="Contact Number"
                    className="form-control"
                    name="user_contact"
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    title="Please enter exactly 10 digits."
                    required
                  />
                </div>
              </div>

              <input
                data-aos="fade-up"
                type="text"
                placeholder="Subject"
                className="form-control"
                name="user_subject"
                required
              />

              <textarea
                data-aos="fade-up"
                name="user_message"
                rows="4"
                className="form-control"
                placeholder="Your Message"
                required
              ></textarea>

              <br />

              <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              <br />
              <br />

              {done && (
                <div className="success-message">
                  <strong>Message sent successfully! ✓</strong>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="error-message">
                  <strong>{error}</strong>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;