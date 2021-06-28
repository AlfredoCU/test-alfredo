import React from "react";
import { string, number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faTrash,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

const Section = ({ section, count }) => {
  let icon;

  if (section === "Inbox") {
    icon = faInbox;
  } else if (section === "Spam") {
    icon = faExclamationTriangle;
  } else {
    icon = faTrash;
  }

  return (
    <>
      <FontAwesomeIcon icon={icon} className="box-header__icon" />
      <h1>{section}</h1>
      <p className="box-header__count">{count}</p>
    </>
  );
};

Section.propTypes = {
  section: string.isRequired,
  count: number.isRequired
};

export default Section;
