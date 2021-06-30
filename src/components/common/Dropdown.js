import React, { useState } from "react";
import { func } from "prop-types";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ section }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleSection = option => {
    section(option);
    setShow(!show);
  };

  return (
    <>
      <button type="button" onClick={handleShow} className="dropdown">
        <span className="dropdown__text">Filter by</span>
        <FontAwesomeIcon icon={faSort} className="dropdown__icon" />
      </button>
      {show && (
        <ul className="dropdown__list">
          <li className="dropdown__item" onClick={() => handleSection("Inbox")}>
            Inbox
          </li>
          <li className="dropdown__item" onClick={() => handleSection("Spam")}>
            Spam
          </li>
          <li className="dropdown__item" onClick={() => handleSection("Trash")}>
            Trash
          </li>
        </ul>
      )}
    </>
  );
};

Dropdown.propTypes = {
  section: func.isRequired
};

export default Dropdown;
