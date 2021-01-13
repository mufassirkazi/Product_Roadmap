import React, { Component } from 'react';
import './EmailSummary.css';
import Aux from '../../../containers/hoc/Aux/Aux';
import axios from 'axios';
import Features from '../../../containers/Features/Features';
//import Button from '../Button/Button';

let errorMessage = [];

class EmailSummary extends Component {

  state = {
    emailFetched: '',
    errorMessage: '',
  }

  emailChangeHandler = (event) => {
    //errormessage.length = 0;
   // this.props.emailFetched(event.target.value);
   this.setState({ emailFetched: event.target.value });
    console.log(event.target.value);
  }

  testEmailSyntax = (value) => {
    const emailText = value;
    const pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

    if (pattern.test(emailText)) {
      this.setState({ errorMessage: ''})
      return true;
    } else {
      this.setState({ errorMessage: 'Please providea valid email address'})

    //  errorMessage.('Please provide a valid email address');
      return false;
    }

  }



  onSubmitHandler = (event) => {
    // console.log(this.state.);
    console.log(this.state.emailFetched);
/*
    emailIdFetched = (value) = {
      value = ({this.state.emailIdFetched})

    }
    */

   
    event.preventDefault();
    if (this.testEmailSyntax(this.state.emailFetched)) {
      this.props.submit(this.state.emailFetched);
    // this.props.emailIdFetched();

/*
      axios.get('link')
        .then(response => {
          if (response.exists) {
            response.featuresUpvoted
          }
        }

        )
        */

    }
    else {
      return false;
      // !this.props.submit();
      //errorMessage.push('Bad email address: ' + {this.state.errorMessage})
    }





  };





  /*
  axios.post('https://jsonplaceholder.typicode.com/posts', newEmail)
  .then(response => {
      console.log(response)
  })
  */








//this.props.submit();
//console.log(this.state.);



render() {



  return (
    <Aux>

      <div className="EmailSummary">
        <h3 className="heading">Hey! Thanks for the upvotes 😃</h3>
        <p className="paragraph">We’re doing our best to build the features you want. Please share your
            email address and we’ll notify you as soon as they are built.</p>

        <form onSubmit={this.onSubmitHandler}>

          <input type="text" value={this.state.emailFetched} onChange={this.emailChangeHandler} className="input" />

          <input type="submit" value="Notify Me" className="Button" />
        </form>

        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#f9284f'
        }}>{this.state.errorMessage}</p>



      </div>


    </Aux>

  );

}
}

/*

const emailSummary = (props) => (

    <Aux>

        <div className = "EmailSummary">
        <h3 className="heading">Hey! Thanks for the upvotes 😃</h3>
        <p className="paragraph">We’re doing our best to build the features you want. Please share your
        email address and we’ll notify you as soon as they are built.</p>

        <form onSubmit= {props.submit}>
 
          <input type="text" value= "" onChange={props.change} className="input" />

        <input type="submit" value="Notify Me" className="Button"/>
      </form>
        

        
        </div>
       

    </Aux>
);

*/

export default EmailSummary;

/*
 <input className="input" type="text" id="email" placeholder="Your email address"/>
<Button submit = {props.click}>Notify Me</Button>
 */
