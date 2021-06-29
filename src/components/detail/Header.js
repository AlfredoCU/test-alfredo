import React from "react";
import Button from "../common/Button";

const Header = () => {
  return (
    <div className="detail-header">
      <div>
        <Button type="button" className="button button--delete">
          Delete
        </Button>
        <Button type="button" className="button">
          Spam
        </Button>
      </div>
      <div>
        <Button type="button" className="button button--primary">
          Mark as unread
        </Button>
      </div>
    </div>
  );
};

export default Header;
