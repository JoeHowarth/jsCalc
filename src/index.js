import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import {Calc} from './calc'

class SillyCalc extends React.Component {
  render() {
    return (
      <div>
        <Description/>
        <h1>what the hell</h1>
        <Calc/>
      </div>
    );
  }
}

function Description(props) {
  render() {
    return (
      <div>
        <h1>SillyCalc.js</h1>
        <h2>A little calculator built to learn React!</h2>
      </div>
    );
  }
}


// ==================
ReactDOM.render(
  <SillyCalc/>,
  document.getElementById('root')
);
