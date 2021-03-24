import "./Skills.css"
import html from "./skillsSvg/html-logo.svg";
import css from "./skillsSvg/css-logo.svg";
import javascript from "./skillsSvg/javascript-logo.svg";
import react from "./skillsSvg/react-logo.svg";
import git from "./skillsSvg/git-logo.svg";
import github from "./skillsSvg/github-logo.svg";
import adobe from "./skillsSvg/adobe-xd-logo.svg";
import figma from "./skillsSvg/figma-logo.svg";
import firebase from "./skillsSvg/firebase-logo.svg";
import bootstrap from "./skillsSvg/bootstrap-logo.svg";
import tailwindcss from "./skillsSvg/tailwindcss-logo.svg";
const Skills = () => {
    return ( 
        <div className="skills bg-light" id="skills">
            <h1>Experienced in</h1>
            <div className="technologies">
                <img src={html} />
                <img src={css} />
                <img src={javascript} />
                <img src={react} />
                <img src={bootstrap} />
                <img src={tailwindcss} />
                <img src={git} />
                <img src={github} />
                <img src={figma} />
                <img src={adobe} />
                <img src={firebase} />
            </div>
        </div>
     );
}
 
export default Skills;