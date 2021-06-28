import React, { useState } from "react";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
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
          <li className="dropdown__item">Inbox</li>
          <li className="dropdown__item">Span</li>
          <li className="dropdown__item">Trash</li>
        </ul>
      )}
    </>
  );
};

export default Dropdown;
