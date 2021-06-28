import React from "react";

import Section from "./Section";
import Dropdown from "../common/Dropdown";

const Header = () => {
  return (
    <div className="box-header">
      <div className="box-header__section">
        <Section section="Inbox" count={3} />
      </div>
      <div className="box-header__section">
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
