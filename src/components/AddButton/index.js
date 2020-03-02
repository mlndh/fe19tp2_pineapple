import React from 'react';

const AddButton = (props) => (
    <div onClick={() => props.handleAddChart()}>+</div>
);

export default AddButton;
