import "./ContactForm.css"

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, email, msg} = e.target
    let myForm = {name: name.value, email: email.value, message: msg.value}
    // let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(myForm).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }
  return (
    <form name="contact" method="POST" data-netlify="true" className="forms" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact"></input>
      <div className="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="name"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          name="email"
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
          name="msg"
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
