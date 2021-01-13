import React from 'react';
import './Post.css';
import UpvoteButton from '../../components/UpvoteButton/UpvoteButton';
import Polygon from '../../assets/images/Polygon.png';
import Counter from '../Counter/Counter';


const post = (props) => (
    <article className="Post" onClick = {props.clicked}>
        <div>
            <div className="Title">{props.title}</div>
            <div className="Author">{props.body}</div>
            <UpvoteButton clicked = {props.click} key= {props.key}> 
                    <img src={Polygon} style= {{width: '15px', height: '13px', paddingRight: '5px' ,flexDirection:'row'}}  alt= " "/>
                    Upvote
                    </UpvoteButton>
                    <Counter>{props.value}</Counter>
            
        </div>
    </article>
);


export default post;