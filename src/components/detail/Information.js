import React from "react";
import { string, arrayOf, shape } from "prop-types";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagItem from "./TagItem";
import FileItem from "./FileItem";
import Button from "../common/Button";
import Textarea from "../common/Textarea";

const Information = ({ subject, tags, body, attachements }) => (
  <div className="detail-info">
    <h2 className="detail-info__name">{subject}</h2>
    <div className="detail-info__tags">
      <h3>Tags</h3>
      {tags &&
        tags.map((tag, index) => <TagItem key={`${tag}_${index}`} tag={tag} />)}
    </div>
    <div className="detail-info__body">
      <p>{body}</p>
      <div className="detail-info__file">
        {attachements &&
          attachements.map((file, index) => (
            <FileItem
              key={`${file}_${index}`}
              file={file.file}
              name={file.name}
            />
          ))}
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

Information.propTypes = {
  subject: string.isRequired,
  tags: arrayOf(string.isRequired).isRequired,
  body: string.isRequired,
  attachements: arrayOf(
    shape({
      file: string.isRequired,
      name: string.isRequired
    }).isRequired
  ).isRequired
};

export default Information;
