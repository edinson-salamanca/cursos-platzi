import React from 'react';

class Button extends React.Component {
  state = {
    count: 0,
  };
  // constructor(){
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // handleClick() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Manzanas: {count}</h1>
        <button type='button' onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default Button;
