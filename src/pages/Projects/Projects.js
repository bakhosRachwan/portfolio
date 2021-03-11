import "./Projects.css"
import Card from "../../components/Card/Card";
import { projects } from "./data";

const Projects = () => {
    return ( 
        <div className="projects bg-dark" id="projects">
            <h1 className="title mt-5"> Projects</h1>
            <div className="grid" >{projects.map(project => <Card project={project} /> )}</div>
        </div>
     );
}
 
export default Projects;