import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TextType from "../animations/Texttype";
import logo from "../assets/logo-new2.webp";
import Coordinators from "./Coordinators";
import "../css/Hero.css";

const Hero = () => {

  const navigate = useNavigate();
  const [stage, setStage] = useState({
    showPresents: false,
    showTitle: false,
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your event date here (e.g., March 15, 2025, 9 AM)
  const eventDate = new Date("2025-08-30T09:00:00");

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && stage.showTitle) {
      navigate("/events");
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [navigate, stage.showTitle]);

  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => {
        setStage((prev) => ({ ...prev, showPresents: true }));
      }, 2000)
    ); // Show presents after 2s

    timers.push(
      setTimeout(() => {
        setStage((prev) => ({ ...prev, showTitle: true }));
      }, 3500)
    ); // Show title after 3.5s

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-container">
        {/* Always visible logo */}
        <img src={logo} alt="College Logo" className="logo-animation-static" />

        {/* "Presents" appears after delay */}
        {stage.showPresents && (
          <div className="presents-text fade-in">Department of ECE <br /><span className="pre_text">Presents</span></div>
        )}

        {/* Title + Enter button appear after delay */}
        {stage.showTitle && (
          <div className="title_enter">
            <TextType
              text={["E-Axion '25"]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
            <div>
              <div className="commence_text">Commences In</div>
              <div className="countdown">
                <span>{timeLeft.days}d</span> :<span>{timeLeft.hours}h</span> :
                <span>{timeLeft.minutes}m</span> :
                <span>{timeLeft.seconds}s</span>
              </div>
            </div>

            <Link to="/events" className="link">
              <div className="enter-btn-wrapper">
                <button className="enter-btn">
                  <span className="enter-label">ENTER</span>
                  <span className="enter-separator"></span>
                  <span className="enter-arrow">→</span>
                </button>
              </div>
            </Link>
          </div>
        )}
        <Coordinators />
      </div>
    </motion.div>
  );
};

export default Hero;
