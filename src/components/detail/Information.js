import React from "react";
import TagItem from "./TagItem";
import FileItem from "./FileItem";
import Textarea from "../common/Textarea";

const Information = () => {
  return (
    <div className="detail-info">
      <h2 className="detail-info__name">Name lastname</h2>
      <div className="detail-info__tags">
        <h3>Tags</h3>
        <TagItem />
        <TagItem />
        <TagItem />
      </div>
      <div className="detail-info__body">
        <p>
          condimentum curabitur in libero ut massa volutpat convallis morbi odio
          odio elementum eu interdum eu tincidunt in leo maecenas pulvinar
          lobortis. condimentum curabitur in libero ut massa volutpat convallis
          morbi odio odio elementum eu interdum eu tincidunt in leo maecenas
          pulvinar lobortis. condimentum curabitur in libero ut massa volutpat
          convallis morbi odio odio elementum eu interdum eu tincidunt in leo
          maecenas pulvinar lobortis. condimentum curabitur in libero ut massa
          volutpat convallis morbi odio odio elementum eu interdum eu tincidunt
          in leo maecenas pulvinar lobortis.
        </p>
        <div className="detail-info__file">
          <FileItem />
          <FileItem />
          <FileItem />
        </div>
      </div>
      <Textarea />
    </div>
  );
};

export default Information;
