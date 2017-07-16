import React from 'react';


export class Grid extends React.Component {
  renderButton(num) {
    return (
      <button className="grid-button">
        {num}
      </button>
    );
  }

  renderFunction(op) {
    let blah = () => {this.props.ComposeOp(op)};
    return (
      <button className="grid-button"
        onClick={blah}>
        {op}
      </button>
    );
  }

  render() {
    return (
      <div className='grid'>
        <div className="grid-row">
          {this.renderFunction('(')}
          {this.renderFunction(')')}
          {this.renderFunction('CE')}
          {this.renderFunction('/')}
        </div>
        <div className="grid-row">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderFunction('/')}
        </div>
        <div className="grid-row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderFunction('*')}
        </div>
        <div className="grid-row">
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderFunction('-')}
        </div>
        <div className="grid-row">
          {this.renderButton(0)}
          {this.renderFunction('.')}
          {this.renderFunction('=')}
          {this.renderFunction('+')}
        </div>
      </div>
    );
  }
}
