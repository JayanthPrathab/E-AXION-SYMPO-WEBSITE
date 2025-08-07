import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import logo from "../assets/logo-new2.webp";
import "../css/FeaturedGrid.css";
import Guidelines from "./Guidelines";

import a11 from "../assets/animethumb1.jpg";
import h11 from "../assets/horrorthumb2.jpg";
import adv11 from "../assets/advthumb.jpg";
import sci11 from "../assets/scifithumb1.jpg";
import r11 from "../assets/retrothumb.jpg";

const gridData = [
  { image: sci11, video: "", category: "Sci-Fi" },
  { image: r11, video: "", category: "Retro" },
  { image: a11, video: "", category: "Anime" },
  { image: h11, video: "", category: "Horror" },
  { image: adv11, video: "", category: "Adventure" },
];

const targetDate = new Date("2025-08-30T00:00:00");

const FeaturedGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
    <div className="featured-container">
      <img src={logo} alt="College Logo" className="featured-logo" />

      <div className="featured-grid">
        {gridData.map((item, idx) => (
          <div
            key={idx}
            className={`grid-item ${idx % 2 === 0 ? "grid-top" : "grid-bottom"} ${
              hoveredIndex === idx ? "grid-hovered" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.image} alt={`work-${idx}`} className="grid-image" />
            
            <video
              src={item.video}
              className="grid-video"
              alt={item.category}
              loop
              playsInline
              preload="auto"
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            />
            <div className="category-label">{item.category}</div>
          </div>
        ))}
      </div>

      <div className="featured-title">
        <h2 className="subtitle">Department of ECE Presents</h2>
        <h1 className="main-title">
          E-Axion <span className="highlight">'25</span><span className="blink">|</span>
        </h1>

        <div className="countdown">
         <div> Commences In  </div> 
          <div className="countdown-timer">
            {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}s
          </div>
        </div>
        <Guidelines />
        <Link to="/events"><button className="enter-button">ENTER →</button></Link>
      </div>
    </div>
    </motion.div>
  );
};

export default FeaturedGrid;
