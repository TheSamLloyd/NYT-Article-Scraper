import React from "react";

export const ArticleList = props => (
  <ul className="list-group" len={props.children.length}>{props.children}</ul>
);
