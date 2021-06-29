import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailFilter } from "../../store/actions/email";
import Header from "./Header";
import Search from "./Search";
import EmailItem from "./EmailItem";

const MailBox = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state);
  const { filter } = email;

  const [section, setSection] = useState("Inbox");

  useEffect(() => {
    dispatch(emailFilter(section));
  }, [section]);

  return (
    <div className="app__box">
      <Header
        section={section}
        count={filter && filter.length}
        handleSection={setSection}
      />
      <Search section={section} />
      <div className="box-email">
        {filter &&
          filter.map(email => (
            <EmailItem
              key={email.id}
              subject={email.subject}
              body={email.body}
              date={email.date}
              isReaded={email.isReaded}
              attachements={email.attachements}
            />
          ))}
      </div>
    </div>
  );
};

export default MailBox;
