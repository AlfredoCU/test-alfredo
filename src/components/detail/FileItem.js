import React from "react";
import { string } from "prop-types";

const FileItem = ({ file, name }) => (
  <div className="detail-info__item-file">
    <img src={file} alt={name} />
    <p>{name}</p>
  </div>
);

FileItem.propTypes = {
  file: string.isRequired,
  name: string.isRequired
};

export default FileItem;
