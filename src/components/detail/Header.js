import React from "react";
import { string, func } from "prop-types";
import Button from "../common/Button";

const Header = ({ id, handleDelete, handleSpam, handleUnread }) => (
  <div className="detail-header">
    <div>
      <Button
        type="button"
        className="button button--delete detail-header__button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
      <Button
        type="button"
        className="button detail-header__button"
        onClick={() => handleSpam(id)}
      >
        Spam
      </Button>
    </div>
    <div>
      <Button
        type="button"
        className="button button--primary"
        onClick={() => handleUnread(id)}
      >
        Mark as unread
      </Button>
    </div>
  </div>
);

Header.propTypes = {
  id: string.isRequired,
  handleDelete: func.isRequired,
  handleSpam: func.isRequired,
  handleUnread: func.isRequired
};

export default Header;
