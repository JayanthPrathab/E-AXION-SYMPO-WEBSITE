import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Ticket from "../components/Ticket";
import EventSection from "./Eventsection";

import "../css/Eventsection.css";

import a1 from "../assets/anime1.png";
import a2 from "../assets/romance.png";
import rapid from "../assets/rapid.jpg";
import soul from "../assets/soul.jpg";
import show from "../assets/showdown.jpg";
import exo from "../assets/exo.jpg";
import eureka from "../assets/eureka.jpg";

const events = [
  {
    title: "The Eureka Expedition",
    year: "2024",
    category: "Technical Quiz",
    members: "Team of 2 members",
    rounds: "3 Rounds",
    tagline: "“Find the answers before time finds you.”",
    duration: "27",
    description:
      "The Eureka Expedition is a high-stakes technical quiz that tests your speed, logic, and adaptability. Race against time through challenges in electronics, communication, and innovation. Decode clues, crack layered logic, and uncover hidden answers — before time runs out.",
    poster: "/assets/ana-maxim.jpg",
    qrImage: eureka,
    regLink: "https://forms.gle/1yGDfN5gfJYsws1P6",
    coordinators: [
      "MALINI PRIYA",
      "BAVASRI",
      "LATHIKA",
      "KUMARESH",
      "PRIYANKA",
      "KEERTHANA",
    ],
  },
  {
    title: "Exo Solve",
    year: "2024",
    category: "Technical Puzzle",
    members: "Team of 2 members",
    rounds: "3 Rounds",
    tagline: "“Alien puzzles. Human logic.”",
    duration: "83",
    description:
      "ExoSolve is a sci-fi themed puzzle event where you decode alien signals that defy human logic. Use Earth-based reasoning to solve symbolic ciphers, logic anomalies, and pattern-based paradoxes. Each challenge brings you closer to understanding an extraterrestrial mind.",
    poster: "/assets/kafka.jpg",
    qrImage: exo,
    regLink: "https://forms.gle/oabgRGakGYwg5wpz9",
    coordinators: [
      "CHANDRA SEKARAN",
      "HARISH",
      "K V BHARATH",
      "ARAVIND",
      "ASWIN SHARON",
      "AZRAA NAAZ",
    ],
  },
  {
    title: "Six eyes showdown",
    year: "2024",
    category: "Circuit Debugging",
    members: "Team of 2 or 3 members",
    rounds: "3 Rounds",
    tagline: "“See beyond circuits — only the sharpest minds will survive.”",
    duration: "83",
    description:
      "A multi-round competitive event that tests observation, logic, and technical intuition — just like Gojo’s Six Eyes, participants must detect patterns, spot errors, and process information with speed and clarity.",
    poster: a1,
    qrImage: show,
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSefq8R-2xasF3gA16pS9LGHgh26HpAYxkKpNFxF7Kd5l-QhIg/viewform?usp=header",
    coordinators: [
      "DHARUKESH",
      "ASHWIN",
      "ARAVIND",
      "SUGNATHI",
      "SUBASHRI",
      "SAMYUKTHA",
    ],
  },
  {
    title: "Signal to my soul",
    year: "2024",
    category: "Technical Connections",
    members: "Team of 2 members",
    rounds: "2 Rounds",
    tagline: "“Old tech. New love. True connection.”",
    duration: "83",
    description:
      "Signal to My Soul is a retro-themed connection event where vintage tech meets modern minds. Decode clues, trace circuits, and solve analog-inspired puzzles — all wrapped in nostalgic vibes and hidden emotional cues. Make precise connections like logic gates and feel the spark — both technical and poetic.",
    poster: a2,
    qrImage: soul,
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeZEQ4Mti9f227PHZGi6oN2GB8lwRtJTWoa_xfxmfxDS_7dZg/viewform?usp=sharing&ouid=115229466376450397276",
    coordinators: [
      "KISHORE KUMAR",
      "MUKESH ARUN",
      "PRADEEP",
      "JENITA",
      "PRISKILLAL",
      "LAKSHMI PRIYA",
    ],
  },
  {
    title: "Rapid Rest.In.Puzzle",
    year: "2024",
    category: "Technical Rapid Fire",
    members: "Team of 2 or 3 members",
    rounds: "2 Rounds",
    tagline: "“Answer fast... or rest in puzzles.”",
    duration: "83",
    description:
      "Rapid R.I.P. is a horror-themed technical rapid-fire event where speed is your only escape. Answer fast-paced, eerie ECE questions before time — or your chances — run out. Every second counts. Every mistake haunts. Only the quickest minds survive.",
    poster: "/assets/kafka.jpg",
    qrImage: rapid,
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdjwoinxvbOppAVED2h-UPiL3EwEQH9fxM6158chZkGIB3iFA/viewform?usp=header",
    coordinators: [
      "RAKSHA",
      "PRANEETHA",
      "SAAJINI",
      "RESHI SHAKTHI",
      "PADMA SRI",
      "MADHUMITHA",
    ],
  },
  // Add more events here
];

import logo from "../assets/eaxion1.png";

const Landingpage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {/* Fixed floating ticket */}
        <Ticket key={activeIndex} {...events[activeIndex]} />
        <img src={logo} alt="" className="eaxion_logo" />
        {/* Event Sections */}
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`event-wrapper ${
              activeIndex === index ? "active" : "dimmed"
            }`}
          >
            <EventSection {...event} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Landingpage;
