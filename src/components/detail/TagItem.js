import React from "react";
import { string } from "prop-types";

const TagItem = ({ tag }) => (
  <div className="detail-info__item-tag">
    <p>{tag}</p>
  </div>
);

TagItem.propTypes = {
  tag: string.isRequired
};

export default TagItem;
