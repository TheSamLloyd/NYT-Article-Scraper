import React from "react"
import API from "../../utils/API.js"

const Save = (props) =>(
  <a onClick={function(){
    if (!props.props.saved) API.save(props.props)
    if (props.props.saved) API.unsave(props.props.id)
    props.props.onSave(Math.random())
  }}><img src="/img/icon.png" width="50"/></a>
)
export default Save