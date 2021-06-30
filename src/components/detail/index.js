import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Information from "./Information";

const Detail = () => {
  const { email } = useSelector(state => state);
  const { detail } = email;

  return (
    <div className="app__detail">
      {Object.keys(detail).length !== 0 && (
        <>
          <Header />
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
