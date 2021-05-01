import "./Skills.css";
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
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="blank"
        >
          <img src={html} alt="logo" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="blank"
        >
          <img src={css} alt="logo" />
        </a>
        <a href="https://www.javascript.com/" target="blank">
          <img src={javascript} alt="logo" />
        </a>
        <a href="https://reactjs.org/" target="blank">
          <img src={react} alt="logo" />
        </a>
        <a href="https://getbootstrap.com/" target="blank">
          <img src={bootstrap} alt="logo" />
        </a>
        <a href="https://tailwindcss.com/" target="blank">
          <img src={tailwindcss} alt="logo" />
        </a>
        <a href="https://chakra-ui.com/" target="blank">
          <img src={chakraui} alt="logo" />
        </a>
        <a href="https://git-scm.com/" target="blank">
          <img src={git} alt="logo" />
        </a>
        <a href="https://github.com/" target="blank">
          <img src={github} alt="logo" />
        </a>
        <a href="https://www.figma.com" target="blank">
          <img src={figma} alt="logo" />
        </a>
        <a href="https://www.adobe.com/products/xd.html" target="blank">
          <img src={adobe} alt="logo" />
        </a>
        <a href="https://firebase.google.com/" target="blank">
          <img src={firebase} alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
