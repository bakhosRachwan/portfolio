import "./ContactForm.css"

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" className="forms">
      <input type="hidden" name="form-name" value="contact"></input>
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="fullname"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
          />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Write your Message</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Type here..."
          rows="3"
          required
          ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
