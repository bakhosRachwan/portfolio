import "./Projects.css"
import Card from "../../components/Card/Card";
import { projects } from "./data";

const Projects = () => {
    return ( 
        <div className="projects bg-dark" id="projects">
            <h1 className="title"> Projects</h1>
            <div className="allProjects" >{projects.map(project => <Card project={project} key={project.id} /> )}</div>
        </div>
     );
}
 
export default Projects;