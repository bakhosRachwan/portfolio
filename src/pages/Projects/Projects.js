import "./Projects.css"
import Card from "../../components/Card/Card";
import { projects } from "./data";

const Projects = () => {
    return ( 
        <div className="projects" id="projects">
            <h1 className="title">PROJECTS</h1>
            <div className="allProjects" >{projects.map(project => <Card project={project} key={project.id} /> )}</div>
        </div>
     );
}
 
export default Projects;