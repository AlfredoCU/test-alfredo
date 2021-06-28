import React from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailItem = () => {
  return (
    <div className="box-email__item">
      <div className="box-email__section">
        <p className="box-email__name">Name</p>
        <p className="box-email__body">
          condimentum curabitur in libero ut massa volutpat convallis morbi odio
          odio elementum eu interdum eu tincidunt in leo maecenas pulvinar
          lobortis
        </p>
      </div>
      <div className="box-email__section--right">
        <p className="box-email__time">09:14 AM</p>
        <FontAwesomeIcon icon={faPaperclip} className="box-email__icon" />
      </div>
    </div>
  );
};

export default EmailItem;
