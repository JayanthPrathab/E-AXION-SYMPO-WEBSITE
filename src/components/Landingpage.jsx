import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Ticket from "../components/Ticket";
import EventSection from "./Eventsection";
import Coordinators from "./Coordinators";

import "../css/Eventsection.css";

import a1 from "../assets/animebg2.png";
import a2 from "../assets/romance.png";
import rapid from "../assets/rapid.jpg";
import soul from "../assets/soul.jpg";
import show from "../assets/showdown.jpg";
import exo from "../assets/exo.jpg";
import eureka from "../assets/eureka.jpg";
import adv from "../assets/adventure.gif";
import hbg from "../assets/horror1.png";
import advbg from "../assets/adv1.png";
import scifi from "../assets/scifi2.png";
import jeni from "../assets/jeni.jpg";
import raksha from "../assets/raksha.jpg";
import pradeep from "../assets/pradeep.jpg";
import priski from "../assets/priski.jpg";
import mukesh from "../assets/mukesh.jpg";
import kichu from "../assets/kichu.jpg";
import priyanka from "../assets/priyanka.jpg";
import chandru from "../assets/chandru1.jpg";
import aravind from "../assets/aravind.jpg";
import azraa from "../assets/azraa.jpg";
import praneetha from "../assets/praneetha.jpg";
import lakshmi from "../assets/lakshmi.jpg";
import madhumitha from "../assets/madhumitha.jpg";
import padma from "../assets/padma.jpg";
import harish from "../assets/harish.jpg";
import sharon from "../assets/sharon.jpg"; 
import malini from "../assets/malini.jpg"; 
import dharukesh from "../assets/dharukesh.jpg";
import kums from "../assets/kums.jpg";
import keerthi from "../assets/keerthi.jpg";
import sugan from "../assets/suganthi.jpg";
import samyuktha from "../assets/samyuktha.jpg";
import subasri from "../assets/subasri.jpg";
import bavasri from "../assets/bavasri.jpg";
import lathika from "../assets/lathika.jpg";
import aswin from "../assets/aswin.jpg";
import lorry from "../assets/lorry.jpg";
import kv from "../assets/kv.jpg";

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
      "The competition kicks off with a rapid-fire round to test your core knowledge and speed. Participants who crack this challenge will move on to the second round — designed to challenge your thinking from every angle. Sharpen your mind, team up, and prove you're the ultimate tech whiz!",
    poster: advbg,
    qrImage: eureka,
    regLink: "https://forms.gle/1yGDfN5gfJYsws1P6",
    coordinators: [
      {
        name: "MALINI PRIYA",
        phone: "99528 80836",
        image: malini, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "BAVASRI",
        phone: "94421 29563",
        image: bavasri, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "LATHIKA",
        phone: "86376 57882",
        image: lathika, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "KUMARESH",
        phone: "98845 06301",
        image: kums, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "PRIYANKA",
        phone: "99520 20766",
        image: priyanka, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "KEERTHANA",
        phone: "98417 50502",
        image: keerthi, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
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
    poster: scifi,
    qrImage: exo,
    regLink: "https://forms.gle/oabgRGakGYwg5wpz9",
    coordinators: [
      {
        name: "CHANDRA SEKARAN",
        phone: "96009 67368",
        image: chandru, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "HARISH",
        phone: "97914 62985",
        image: harish, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "K V BHARATH",
        phone: "82202 04915",
        image: kv, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "ARAVIND",
        phone: "63822 29523",
        image: aravind, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "ASHWIN SHARON",
        phone: "73584 17474",
        image: sharon, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "AZRAA NAAZ",
        phone: "88255 62769",
        image: azraa, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
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
      {
        name: "DHARUKESH",
        phone: "81242 42395",
        image: dharukesh, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "ASWIN",
        phone: "99529 55779",
        image: aswin, 
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "ARAVIND",
        phone: "90801 36817",
        image: lorry, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "SUGNATHI",
        phone: "89252 15445",
        image: sugan, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "SUBASHRI",
        phone: "89460 07531",
        image: subasri, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "SAMYUKTHA",
        phone: "99404 89016",
        image: samyuktha, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
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
      {
        name: "KISHORE KUMAR",
        phone: "98414 51997",
        image: kichu, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "MUKESH ARUN",
        phone: "97914 62985",
        image: mukesh, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "PRADEEP",
        phone: "76959 31249",
        image: pradeep, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "JENITA PAULYN",
        phone: "73055 46465",
        image: jeni,
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "PRISKILLAL",
        phone: "98402 13136",
        image: priski,
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "LAKSHMI PRIYA",
        phone: "87781 80142",
        image: lakshmi, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
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
    poster: hbg,
    qrImage: rapid,
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdjwoinxvbOppAVED2h-UPiL3EwEQH9fxM6158chZkGIB3iFA/viewform?usp=header",
    coordinators: [
      {
        name: "RAKSHA",
        phone: "70329 21109",
        image: raksha, 
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "PRANEETHA",
        phone: "97916 23226",
        image: praneetha, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "RESHI SHAKTHI",
        phone: "76959 31249",
        image: "path_to_photo.jpg", // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      {
        name: "PADMA SRI",
        phone: "73055 46465",
        image: padma, // or an external URL
        linkedin: "https://www.linkedin.com/in/padma-sri-5044b9258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com/sri_padma_609",
      },
      {
        name: "MADHUMITHA",
        phone: "98402 13136",
        image: madhumitha, // or an external URL
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
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
      <br />
      <Coordinators />
    </motion.div>
  );
};

export default Landingpage;
