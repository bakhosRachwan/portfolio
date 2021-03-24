import "./Contact.css";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return ( 
        <div className="contact bg-dark" id="contact">
            <h1>Contact me</h1>
            <h4 className="subtitle">You can always reach out to me for collaboration work, assistance or job vacancies </h4>
            <p>Email: <a href="mailto: bakhos.rachwan@gmail.com">bakhos.rachwan@gmail.com</a></p>
            <p>Cellphone Number: <a href="tel: +96176345405">+961 76-345405</a></p><br/>
            <h3 className="media-tilte">Social Media</h3>
            <div className="media">
                <a href="https://github.com/bakhosRachwan" target="_blank">
                    <AiFillGithub size="4rem"  /></a>
                <a href="https://linkedin.com/in/bakhos-rachwan" target="_blank">
                    <AiFillLinkedin size="4rem" /></a>
                <a href="mailto: bakhos.rachwan@gmail.com">
                    <MdEmail size="4rem" /></a>
            </div>
        </div>
     );
}
 
export default Contact;