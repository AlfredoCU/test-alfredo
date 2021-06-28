import React from "react";

import Header from "./Header";
import Search from "./Search";
import EmailItem from "./EmailItem";

const MailBox = () => {
  return (
    <div className="app__box">
      <Header />
      <Search />
      <div className="box-email">
        <EmailItem />
        <EmailItem />
        <EmailItem />
        <EmailItem />
        <EmailItem />
        <EmailItem />
        <EmailItem />
      </div>
    </div>
  );
};

export default MailBox;
