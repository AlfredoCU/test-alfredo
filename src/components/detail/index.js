import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  emailUnreaded,
  emailSection,
  emailFilter,
  emailDetail,
  emailShow
} from "../../store/actions/email";
import Header from "./Header";
import Information from "./Information";

const Detail = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state);
  const { detail, section, show } = email;

  let menu = show ? "app__detail--show" : "";

  const handleShow = () => {
    dispatch(emailShow(false));
  };

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
    <div className={`app__detail ${menu}`}>
      {Object.keys(detail).length !== 0 && (
        <>
          <div className="app__return" onClick={handleShow}>
            <FontAwesomeIcon icon={faChevronLeft} className="app__icon" />
            <h2>To return</h2>
          </div>
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
