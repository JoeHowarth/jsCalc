import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import {Grid} from './grid'
import {Display} from './display'

class Calc extends React.Component {
  constructor() {
    super();
    this.state = {
      expression: "base",
    };
  }

  composeOp(op) {
    this.setState({
      expression: op,
    });
  }

  render() {
    return (
      <div className='calc'>
        <div className='display'>
          <Display
            expression={this.state.expression}
          />
        </div>
        <Grid
          ComposeOp={this.composeOp}
        />
      </div>
    );
  }
}





// ==================
ReactDOM.render(
  <Calc />,
  document.getElementById('root')
);
