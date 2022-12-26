import "./Contact.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="mainWrapper" id="contact">
        <h1>Contact me</h1>
        <h4 className="subtitle">
          You can always reach out to me for collaboration work,<br/>
          assistance or job vacancies
        </h4>
        <p>
          Email:{" "}
          <a href="mailto: bakhos.rachwan@gmail.com">
            bakhos.rachwan@gmail.com
          </a>
        </p>
        <p>
          Cellphone Number: <a href="tel: 0096176345405">+961 76-345405</a>
        </p>
        <br />
        <h3 className="media-title">Social Media</h3>
        <div className="media">
          <a href="https://github.com/bakhosRachwan" target="blank">
            <AiFillGithub size="4rem" />
          </a>
          <a href="https://linkedin.com/in/bakhos-rachwan" target="blank">
            <AiFillLinkedin size="4rem" />
          </a>
          <a href="https://twitter.com/BakhosRachwan" target="blank">
            <AiOutlineTwitter size="4rem" />
          </a>
          <a href="mailto: bakhos.rachwan@gmail.com">
            <MdEmail size="4rem" />
          </a>
        </div>
      </div>
      {/* <ContactForm /> */}
    </div>
  );
};

export default Contact;
