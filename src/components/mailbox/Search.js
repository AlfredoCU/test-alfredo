import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../common/Input";

const Search = () => {
  return (
    <div className="box-search">
      <Input
        id="search"
        type="search"
        name="search"
        value=""
        // onChange={}
        placeholder={"Search"}
      />
      <FontAwesomeIcon icon={faSearch} className="box-search__icon" />
    </div>
  );
};

export default Search;
