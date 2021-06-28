import React from "react";

import Header from "./Header";
import Search from "./Search";
import EmailItem from "./EmailItem";

const MailBox = () => {
  return (
    <div className="app__box">
      <Header />
      <Search />
      <EmailItem />
    </div>
  );
};

export default MailBox;
