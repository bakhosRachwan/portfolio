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
    <div className="skills" id="skills">
      <h1>Experienced in</h1>
      <div className="technologies">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="blank"
        >
          <img src={html} alt="logo" />
          <div class="middle">
            <div class="text">HTML</div>
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="blank"
        >
          <img src={css} alt="logo" />
          <div class="middle">
            <div class="text">CSS</div>
          </div>
        </a>
        <a href="https://www.javascript.com/" target="blank">
          <img src={javascript} alt="logo" />
          <div class="middle">
            <div class="text">JavaScript</div>
          </div>
        </a>
        <a href="https://reactjs.org/" target="blank">
          <img src={react} alt="logo" />
          <div class="middle">
            <div class="text">React</div>
          </div>
        </a>
        <a href="https://getbootstrap.com/" target="blank">
          <img src={bootstrap} alt="logo" />
          <div class="middle">
            <div class="text">Bootstrap</div>
          </div>
        </a>
        <a href="https://tailwindcss.com/" target="blank">
          <img src={tailwindcss} alt="logo" />
          <div class="middle">
            <div class="text">TailwindCSS</div>
          </div>
        </a>
        <a href="https://chakra-ui.com/" target="blank">
          <img src={chakraui} alt="logo" />
          <div class="middle">
            <div class="text">ChakraUI</div>
          </div>
        </a>
        <a href="https://git-scm.com/" target="blank">
          <img src={git} alt="logo" />
          <div class="middle">
            <div class="text">Version Control</div>
          </div>
        </a>
        <a href="https://github.com/" target="blank">
          <img src={github} alt="logo" />
          <div class="middle">
            <div class="text">GitHub</div>
          </div>
        </a>
        <a href="https://www.figma.com" target="blank">
          <img src={figma} alt="logo" />
          <div class="middle">
            <div class="text">Figma</div>
          </div>
        </a>
        <a href="https://www.adobe.com/products/xd.html" target="blank">
          <img src={adobe} alt="logo" />
          <div class="middle">
            <div class="text">AdobeXD</div>
          </div>
        </a>
        <a href="https://firebase.google.com/" target="blank">
          <img src={firebase} alt="logo" />
          <div class="middle">
            <div class="text">Firebase</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Skills;
