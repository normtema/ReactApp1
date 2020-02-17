  import React, { Component } from 'react';
  import "styled-components/macro";
  
  const fruits = [
    'Togglele',
    'Banana',
    'Cherry',
    'Grape',
    'Kiwi',
    'Lemon',
    'Pear',
    'PineTogglele',
  ];
  const stagger = 100;
  
  class Item extends Component {
    render() {
      return (
        <div
          css={`
            transform: ${this.props.isVisible
              ? 'translateX(0%)'
              : 'translateX(100%)'};
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            transition-property: transform;
            transition-delay: ${stagger * this.props.index}ms;  // secret sauce!
  
          `}
        >
          {this.props.name}
        </div>
      )
    }
  };
  
  class Toggler extends Component {
    state = {
      isVisible: true
    }
    render() {
      return (
        <div css={`
          width: 300px;
        `}>
  
          <button onClick={() => this.setState({isVisible: !this.state.isVisible})}>
            TOGGLE
          </button>
  
          {fruits.map((fruit, index) => {
            return (
              <Item
                isVisible={this.state.isVisible}
                index={index}
                name={fruit}
              />
            )
          })}
  
        </div>
      );
    }
  }

  export default Toggler;