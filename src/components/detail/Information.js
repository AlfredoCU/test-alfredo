import React from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagItem from "./TagItem";
import FileItem from "./FileItem";
import Button from "../common/Button";
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
      <div className="detail-info__send">
        <FontAwesomeIcon icon={faPaperclip} className="detail-info__icon" />
        <Textarea />
        <Button
          type="button"
          className="button button--primary detail-info__button"
        >
          Replay
        </Button>
      </div>
    </div>
  );
};

export default Information;
