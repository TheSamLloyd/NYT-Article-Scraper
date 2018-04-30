import React from "react";
import Save from "./Save.js"

export const Article = props => (
  <li className="list-group-item">
    {props.title} -- <Save className="ml-auto" props={props}/>
  </li>
);
