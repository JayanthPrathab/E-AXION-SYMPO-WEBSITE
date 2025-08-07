import React from "react";
import "../css/Guidelines.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Guidelines = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="main_guidelines">
        <button className="guidelines" onClick={() => setShowModal(true)}>
          Event Guidelines
        </button>
        {showModal && (
          <div
            className="guidelines_modal_overlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="guidelines_modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                className="close_modal_btn"
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  zIndex: 2,
                }}
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div>
                <div className="guide_title">GUIDE-LINES</div>
                <ul>
                  <li>Registration is FREE for all the events</li>
                  <li>College ID card is mandatory.</li>
                  <li>
                    Registered students should report to college by 8.30AM.
                  </li>
                  <li>On-Spot Registration will not be allowed.</li>
                  <li>Decent dress code should be followed.</li>
                  <li>Judge's decision will be final and binding.</li>
                  <li>Participants must arrange their own transport.</li>
                  <li>Food will be provided (free of cost) by our college.</li>
                  <li>
                    Proper decorum must be maintained in accordance with the
                    college rules while in the College campus.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Guidelines;
