import Button from "./Button";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <form>
            <h2>Contact Me</h2>
            <div className="input-box">
              <label>Name</label>
              <input type="text" className="field" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <label>Email</label>
              <input type="email" className="field" placeholder="example@mail.com" required />
            </div>
            <div className="input-box">
              <label>Message</label>
              <textarea
                name=""
                id=""
                className="field-message"
                placeholder="Write a brief message"
                required
              />
            </div>
            <Button variant="primary">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
