import React from 'react';

export class Display extends React.Component {

  render() {
    return (
      <h2>{this.props.expression}</h2>
    );
  }
}
