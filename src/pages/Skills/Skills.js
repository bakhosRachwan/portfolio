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
import chakraui from "./skillsSvg/chakra-ui-logo.svg";
const Skills = () => {
    return ( 
        <div className="skills bg-light" id="skills">
            <h1>Experienced in</h1>
            <div className="technologies">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                    <img src={html} alt="logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img src={css} alt="logo" />
                </a>
                <a href="https://www.javascript.com/">
                <img src={javascript}alt="logo" />
                </a>
                <a href="https://reactjs.org/">
                <img src={react} alt="logo" />
                </a>
                <a href="https://getbootstrap.com/">
                <img src={bootstrap} alt="logo" />
                </a>
                <a href="https://tailwindcss.com/">
                <img src={tailwindcss} alt="logo" />
                </a>
                <a href="https://chakra-ui.com/">
                <img src={chakraui} alt="logo" />
                </a>
                <a href="https://git-scm.com/">
                <img src={git} alt="logo" />
                </a>
                <a href="https://github.com/">
                <img src={github}alt="logo"  />
                </a>
                <a href="https://www.figma.com">
                <img src={figma} alt="logo" />
                </a>
                <a href="https://www.adobe.com/products/xd.html">
                <img src={adobe} alt="logo" />
                </a>
                <a href="firebase.google.com/">
                <img src={firebase} alt="logo" />
                </a>
            </div>
        </div>
     );
}
 
export default Skills;