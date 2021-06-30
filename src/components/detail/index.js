import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emailUnreaded,
  emailSection,
  emailFilter,
  emailDetail
} from "../../store/actions/email";
import Header from "./Header";
import Information from "./Information";

const Detail = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state);
  const { detail, section } = email;

  const handleDelete = id => {
    dispatch(emailSection({ id, section: "Trash" }));
    dispatch(emailFilter(section));
    dispatch(emailDetail(null));
  };

  const handleSpam = id => {
    dispatch(emailSection({ id, section: "Spam" }));
    dispatch(emailFilter(section));
    dispatch(emailDetail(null));
  };

  const handleUnread = id => {
    dispatch(emailUnreaded(id));
    dispatch(emailFilter(section));
  };

  return (
    <div className="app__detail">
      {Object.keys(detail).length !== 0 && (
        <>
          <Header
            id={detail.id}
            handleDelete={handleDelete}
            handleSpam={handleSpam}
            handleUnread={handleUnread}
          />
          <Information
            key={detail.id}
            subject={detail.subject}
            tags={detail.tags}
            body={detail.body}
            attachements={detail.attachements}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
