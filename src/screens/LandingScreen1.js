import React,{useState} from "react";
import Art3d from "../components/art3d";
import './LandingScreen1.css'
import Navigation from "../components/navigation";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const LandingScreen1 = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    return(
        <div>
            <Navigation />
        <div id="zero">
            <div id="one">
                <h1 id="subone">Where the world art comes together</h1>
                <text>Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</text>
                <div class="formwrapper">
                    <form>
                        <input type="email" placeholder="example@gmail.com" name="email" required />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <div id="two">
                <Art3d />
            </div>    
        </div>
        </div>
    )
}


export default LandingScreen1;