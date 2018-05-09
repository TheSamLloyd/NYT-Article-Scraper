import React from "react";
import Save from "./Save.js"

export const Article = props => (
  <li className="list-group-item">
    <a href={props.url}>{props.title}</a> -- <Save className="ml-auto" props={props}/>
    <br/><em>{props.date}</em>
  </li>
);
