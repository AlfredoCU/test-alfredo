import React from "react";

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
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
