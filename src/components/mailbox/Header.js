import React from "react";
import { string, number, func } from "prop-types";
import Section from "./Section";
import Dropdown from "../common/Dropdown";

const Header = ({ section, count, handleSection }) => (
  <div className="box-header">
    <div className="box-header__section">
      <Section section={section} count={count} />
    </div>
    <div className="box-header__section">
      <Dropdown section={handleSection} />
    </div>
  </div>
);

Header.propTypes = {
  section: string.isRequired,
  count: number.isRequired,
  handleSection: func.isRequired
};

export default Header;
