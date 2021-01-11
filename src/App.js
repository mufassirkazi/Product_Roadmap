import React, { Component } from 'react';

import Features from './containers/Features/Features';
import Rocket from './assets/images/Rocket.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <p style={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#fff', textAlign: 'center',
          marginTop: '111px',
          marginBottom: '30px',
        }}>Product
        <span style={{ color: '#8C58FF' }}> Roadmap</span> <img src={Rocket} style={{
            width: '47px',
            height: '51px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', horizontalAlign: 'center'
          }} alt="" /> </p>
        <p style={{
          fontSize: '24px',
          fontWeight: 'medium', lineHeight: '32px',
          alignContent: 'center',
          color: '#ccc', textAlign: 'center', marginBottom: '64px'
        }}>Upvote the features you like, and we’ll notify you once they
        {"\n"}are available</p>
        <Features />
        
      </div>
    );
  }
}

export default App;
