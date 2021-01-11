import React from 'react';
import './UpvoteButton.css';



const upvoteButton = (props) => (
    <button className = "UpvoteButton" onClick = {props.clicked} >
        
    {props.children}
    </button>

);




export default upvoteButton;