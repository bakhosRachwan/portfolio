import "./Card.css";
import { AiFillGithub } from "react-icons/ai";
import { FiLink } from "react-icons/fi";

const Card = ({ project }) => {
  return (
        <div className="card profile-card">
          <div className="card-img-block">
            <img
              className="card-img-top"
              src={project.img}
              alt={project.name}
            />
          </div>
          <div className="card-body pt-0">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
            {project.description}
            </p>
            <a href={project.link} target="blank">
            <AiFillGithub size="2rem" />
          </a>
          <a href={project.demo} target="blank">
            <FiLink size="2rem" />
          </a>
          </div>
        </div>
  );
};

export default Card;
