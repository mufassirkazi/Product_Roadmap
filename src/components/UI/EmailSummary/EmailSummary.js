import React from 'react';
import './EmailSummary.css';
import Aux from '../../../containers/hoc/Aux/Aux';
import Button from '../Button/Button';


const emailSummary = (props) => (

    <Aux>

        <div className = "EmailSummary">
        <h3 className="heading">Hey! Thanks for the upvotes 😃</h3>
        <p className="paragraph">We’re doing our best to build the features you want. Please share your
        email address and we’ll notify you as soon as they are built.</p>
        
        <input className="input" type="text" id="id" placeholder="Your email address"/> 
        <Button onClick = {props.clicked}>Notify Me</Button>


        
        </div>
       

    </Aux>
);


export default emailSummary;