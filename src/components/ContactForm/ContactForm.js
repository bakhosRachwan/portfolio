import "./ContactForm.css"

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" className="forms">
      <input type="hidden" name="form-name" value="contact"></input>
      <div className="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
          />
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Write your Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Type here..."
          rows="3"
          required
          ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
