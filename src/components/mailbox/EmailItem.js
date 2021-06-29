import React from "react";
import { string, bool, arrayOf, shape } from "prop-types";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailItem = ({ subject, body, date, isReaded, attachements }) => {
  let card = isReaded || "box-email__item--active";
  let name = isReaded || "box-email__name--active";

  return (
    <div className={`box-email__item ${card}`}>
      <div className="box-email__section">
        <p className={`box-email__name ${name}`}>{subject}</p>
        <p className="box-email__body">{body}</p>
      </div>
      <div className="box-email__section--right">
        <p className="box-email__time">{date}</p>

        {attachements.length > 0 && (
          <FontAwesomeIcon icon={faPaperclip} className="box-email__icon" />
        )}
      </div>
    </div>
  );
};

EmailItem.propTypes = {
  subject: string.isRequired,
  body: string.isRequired,
  date: string.isRequired,
  isReaded: bool.isRequired,
  attachements: arrayOf(
    shape({
      file: string.isRequired,
      name: string.isRequired
    })
  ).isRequired
};

export default EmailItem;
