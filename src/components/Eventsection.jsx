import React from "react";
import "../css/Eventsection.css";
import { useState } from "react";

const EventSection = ({ title, year, category, tagline, poster,qrImage,regLink }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="event-container">
        {/* Background Image */}
        <img className="event-poster" src={poster} alt={title} />
        <div className="event-overlay" />

        {/* Content */}
        <div className="event-content">
          <div className="event-left">
            <div className="event-category">{category.toUpperCase()}</div>
            <h1 className="event-title">{title.toUpperCase()}</h1>
            <div className="event-meta">
              <div>
                <span>{tagline.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (optional quote/acclaim area) */}
          <div className="event-right">
            <button
              className="register-button"
              onClick={() => setModalOpen(true)}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <a
              href={regLink}
              target="_blank"
              rel="noopener noreferrer"
              className="reg-link"
            >
             CLICK HERE TO REGISTER
            </a>
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventSection;
