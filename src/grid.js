import React from 'react';


export class Grid extends React.Component {
  renderButton(op) {
    return (
      <button className="grid-button"
        onClick={() => this.props.ComposeOp(op)}>
        {op}
      </button>
    );
  }

  render() {
    return (
      <div className='grid'>
        <div className="grid-row">
          {this.renderButton('(')}
          {this.renderButton(')')}
          {this.renderButton('CE')}
          {this.renderButton('Back')}
        </div>
        <div className="grid-row">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton('/')}
        </div>
        <div className="grid-row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton('*')}
        </div>
        <div className="grid-row">
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderButton('-')}
        </div>
        <div className="grid-row">
          {this.renderButton(0)}
          {this.renderButton('.')}
          {this.renderButton('=')}
          {this.renderButton('+')}
        </div>
      </div>
    );
  }
}
