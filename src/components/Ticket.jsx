import React, { useState } from "react";
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
            <div className="ticket-title">{title.toUpperCase()}</div>
            <div className="ticket-chevron">
              <FontAwesomeIcon
                icon={dropdownOpen ? faChevronUp : faChevronDown}
              />
            </div>
          </div>
          <div className="ticket-divider-line" />
          <div className="ticket-meta-row">
            <div>{category.toUpperCase()}</div>
            <div>{year}</div>
            <div>MIN.{duration}</div>
          </div>
        </div>

        <div className="ticket-divider-vertical" />

        <div className="ticket-actions">
          <div
            className="hamburger-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="ticket-dropdown-menu">
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
        </div>
      )}

      {dropdownOpen && (
        <div className="ticket-chevron-dropdown">
          <ul className="project-list">
            {coordinators.map((name, idx) => (
              <li key={idx} className="coordinator-name">
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Ticket;
