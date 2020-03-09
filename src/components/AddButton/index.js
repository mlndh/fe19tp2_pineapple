import React from 'react';

const addImg = require("../Assets/addImg.jpeg");

const AddButton = (props) => (
    <div onClick={() => props.handleAddChart()}><img src={addImg} /></div>
);

export default AddButton;
