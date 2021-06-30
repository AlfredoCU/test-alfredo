import React from "react";
import { string, func } from "prop-types";

const Notification = ({ message, close }) => (
  <p className="notification">
    <span onClick={() => close(false)}>&times;</span>
    {message}
  </p>
);

Notification.propTypes = {
  message: string.isRequired,
  close: func.isRequired
};

export default Notification;
