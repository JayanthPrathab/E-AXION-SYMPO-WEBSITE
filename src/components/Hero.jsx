import { useEffect, useState } from "react";
import LightRays from "../animations/Lightray";
import DarkVeil from "../animations/Darkveil";
import TextType from "../animations/Texttype";
import logo from "../assets/logo-new2.webp"; // place your logo image here
import "../css/Hero.css"; // import the CSS file

const Hero = () => {
  const [stage, setStage] = useState("logo");

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setStage("presents"), 2000)); // after 2s
    timers.push(setTimeout(() => setStage("title"), 3500)); // after 3.5s

    return () => timers.forEach(clearTimeout); // cleanup
  }, []);

  return (
    <>
      <div className="dark-veil-wrapper">
        <DarkVeil />
      </div>
      <div className="hero-container">
        {stage === "logo" && (
          <img src={logo} alt="College Logo" className="logo-animation" />
        )}

        {stage === "presents" && <div className="presents-text">Presents</div>}

        {stage === "title" && (
          <>
            <TextType
              text={["E-Axion '25"]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />{" "}
            <br />
            <div className="enter-btn-wrapper">
              <button className="enter-btn">
                <span className="enter-label">ENTER</span>
                <span className="enter-separator"></span>
                <span className="enter-arrow">→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Hero;
