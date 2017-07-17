import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import {Calc} from './calc'

class SillyCalc extends React.Component {


  render() {
    let descStyle = {marginBottom: 10,}

    return (
      <div>
        <div style={descStyle}>
          <h1>SillyCalc.js</h1>
          <h2>A little calculator built to learn React!</h2>
        </div>
        <Calc/>
      </div>
    );
  }
}



// ==================
ReactDOM.render(
  <SillyCalc/>,
  document.getElementById('root')
);
