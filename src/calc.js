import React from 'react';

import {Grid} from './grid'
import {Display} from './display'

export class Calc extends React.Component {
  constructor() {
    super();
    this.state = {
      expression: "",
      valid: true,
    };

  }
  composeOp(op) {
    const s = this.state;
    let expr = s.valid? s.expression: '';

    if (op === '=') {
      expr = this.evalOp(op, expr);
    } else if (op === 'Back') {
      expr = expr.toString().slice(0, -1 );
    }
    else {
      expr += ' ' + op;
      this.setState({
        valid: true,
      })
    }

    this.setState({
      expression: (op === 'CE')? '' : expr,
    })
  }

  // tries to evaluate expression
  evalOp(op, expr) {
    if (op === '=') {
      try {
        return eval(expr);
      } catch (e) {
        this.setState({
          valid: false,
        });
        return 'Invalid expression! Try again';
      }
    }
  }

  render() {
    return (
      <div className='calc' >
        <div className='display'>
          <Display
            expression={this.state.expression}
          />
        </div>
        <Grid
          ComposeOp={op => this.composeOp(op)}
          ClearE={() => this.ClearE()}
        />
      </div>
    );
  }
}
