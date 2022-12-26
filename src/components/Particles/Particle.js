import Particles from "react-particles-js"
import "./Particle.css"

const Particle = () => {
    return ( 
        <Particles 
        className="particles-canvas"
        params={{
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                shape: {
                    type: "triangle",
                    stroke: {
                        width: 6,
                        color: "#FACF0F"
                    }
                } 
            }
        }} />
     );
}
 
export default Particle;