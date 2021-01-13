import React from 'react';
import './UpvoteButton.css';



const upvoteButton = (props) => {
    const onClick = (event) => { 
        event.target.classList.toggle('UpvoteButtonClicked')
        props.clicked() 
    }
    // remaining html

    return (<button className="UpvoteButton" onClick={onClick} >

        {props.children}
    </button>

    )
};


export default upvoteButton;