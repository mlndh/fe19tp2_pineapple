import React from "react";
const remove = require("../Assets/trash-alt.svg");

const RemoveButton = props => (
  <div onClick={() => props.handleRemoveChart(props.index)}>
    <img src={remove} />
  </div>
);

export default RemoveButton;
