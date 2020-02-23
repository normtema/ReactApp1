import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';
import Test from './Test';
import Toggler from "./Toggler";
import StatefulFn from "./Button";
import * as serviceWorker from './serviceWorker';
import "styled-components/macro";

// ReactDOM.render(<App />, document.querySelector('.app'));



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Text field value is: ' + this.state.value);
    }

    render() {
        return (
                <div>
                    <input type="text"
                     placeholder="Hello!"
                     value={this.state.value}
                     onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>
                        Submit
                    </button>
                 </div>
             );
    }
}

 ReactDOM.render(
     <Form />,
     document.getElementById('app')
 );


 ReactDOM.render(
    <App />,
    document.querySelector('.app')
);

ReactDOM.render(<Test />, document.querySelector('.test'));

let btn = document.querySelector('.btn');
let tog = () => {
    ReactDOM.render(
        <Toggler />, 
        document.querySelector('.toggler')
    );
}

btn.addEventListener('click',() => setTimeout(tog, 1000));

const container = document.createElement("div");
document.body.appendChild(container);
render(<StatefulFn />, container);


serviceWorker.unregister();







