import React, { Component } from 'react';
/**
 * los stateful maneja ciclo de vida y estados
 */
class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hola mundo',
    };
  }

  render() {
    return <h1>{this.state.hello}</h1>;
  }
}
export default Stateful;
