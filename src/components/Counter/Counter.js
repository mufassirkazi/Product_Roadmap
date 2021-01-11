import React from 'react';
import './Counter.css';

const counter = (props) => (
    <button className = "Counter">
        {props.children}
    </button>

);

export default counter;