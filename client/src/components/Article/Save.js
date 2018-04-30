import React from "react"
import API from "../../utils/API.js"

const Save = (props) =>(
  <a onClick={API.save}><img src="https://cdn.pixabay.com/photo/2014/09/26/10/45/floppy-disk-462210_960_720.png" width="50"/></a>
)
export default Save