import React from "react";
import { string } from "prop-types";
import { useDispatch } from "react-redux";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emailSearch } from "../../store/actions/email";
import Input from "../common/Input";

const Search = ({ section }) => {
  const dispatch = useDispatch();
  const handleInputChange = ({ target }) => {
    dispatch(emailSearch({ section, value: target.value }));
  };

  return (
    <div className="box-search">
      <Input
        id="search"
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleInputChange}
      />
      <FontAwesomeIcon icon={faSearch} className="box-search__icon" />
    </div>
  );
};

Search.propTypes = {
  section: string.isRequired
};

export default Search;
