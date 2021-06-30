import React from "react";
import { func } from "prop-types";
import Button from "../common/Button";

const Header = ({ handleDelete, handleSpam, handleUnread }) => (
  <div className="detail-header">
    <div>
      <Button
        type="button"
        className="button button--delete"
        onClick={() => handleDelete}
      >
        Delete
      </Button>
      <Button type="button" className="button" onClick={() => handleSpam}>
        Spam
      </Button>
    </div>
    <div>
      <Button
        type="button"
        className="button button--primary"
        onClick={() => handleUnread}
      >
        Mark as unread
      </Button>
    </div>
  </div>
);

Header.propTypes = {
  handleDelete: func.isRequired,
  handleSpam: func.isRequired,
  handleUnread: func.isRequired
};

export default Header;
