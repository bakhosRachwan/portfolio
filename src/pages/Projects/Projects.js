import "./Projects.css"
import Card from "../../components/Card/Card"

const Projects = () => {
    const projects =[
        {
            name: "Portfolio",
            img: "https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg",
            description: "My personal website the one you are in right now feel free to check the code on github.",
            link: "https://github.com/bakhosRachwan/portfolio"
        },
        {
            name: "Movie App",
            img: "https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg",
            description: "An App that fetches movies information from TMDB API and you can search by name and genre. also each movie lists ratinf trailer and actress information.",
            link: "https://github.com/bakhosRachwan/movie-app-react-js"
        }
    ]
    return ( 
        <div className="projects bg-dark" id="projects">
            <div className="grid" >{projects.map(project => <Card project={project} /> )}</div>
        </div>
     );
}
 
export default Projects;