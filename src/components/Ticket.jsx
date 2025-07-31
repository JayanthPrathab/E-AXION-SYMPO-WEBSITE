import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Eventsection.css";

const sampleProjects = [
  "SAVOY",
  "MOON IN THE 12TH HOUSE",
  "TABOO",
  "KAFKA'S LAST TRIAL",
  "MY PROJECT X",
  "ANA MAXIM",
  "OUTSIDER FREUD",
];

const Ticket = ({
  title,
  year,
  category,
  duration,
  description,
  poster,
  members,
  rounds,
  coordinators = [],
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <>
      <div className="ticket-box">
        <div className="ticket-thumbnail-container">
          <img src={poster} alt={title} className="ticket-thumbnail" />
        </div>

        <div className="ticket-info">
          <div
            className="ticket-header-row"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={title}
                className="ticket-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {title.toUpperCase()}
              </motion.div>
            </AnimatePresence>
            <div className="ticket-chevron">
              <FontAwesomeIcon
                icon={dropdownOpen ? faChevronUp : faChevronDown}
              />
            </div>
          </div>
          <div className="ticket-divider-line" />
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${year}-${duration}`}
              className="ticket-meta-row"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div>{category.toUpperCase()}</div>
              <div>{year}</div>
              <div>MIN.{duration}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="ticket-divider-vertical" />

        <div className="ticket-actions" onClick={() => setMenuOpen((prev) => !prev)}>
          <div
            className="hamburger-icon"
            
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="ticket-dropdown-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="ticket-nav-links">
              <li>
                <span>01</span> {members.toUpperCase()}
              </li>
              <li>
                <span>02</span> {rounds.toUpperCase()}
              </li>
              <li>
                <span>03</span> DESCRIPTION{" "}
                <FontAwesomeIcon
                  icon={descriptionOpen ? faChevronUp : faChevronDown}
                  onClick={() => setDescriptionOpen((prev) => !prev)}
                />
                <div
                  className={`description-content ${
                    descriptionOpen ? "open" : ""
                  }`}
                >
                  {description}
                </div>
              </li>
            </ul>

            <div className="ticket-social">
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-linkedin-in" />
            </div>
            <div className="ticket-footer">&copy;2025. E-AXION</div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            className="ticket-chevron-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="coordinator_title">CO-ORDINATORS</div>
            <ul className="project-list">
              {coordinators.map((name, idx) => (
                <li key={idx} className="coordinator-name">
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Ticket;
