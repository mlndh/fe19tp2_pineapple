import React from "react";

const RemoveButton = props => (
  <div onClick={() => props.handleRemoveChart(props.index)}>
    --REMOVE ME BRO--
  </div>
);

export default RemoveButton;
