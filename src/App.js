import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

export class Component1 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.clickHandler.bind(this);
  }
  clickHandler(event) {
    console.log('clicked', event.target);
  }

  render() {
    return (
      <div>
        <h1>Hello World {this.props.name} {this.props.course}</h1>
        <button
          onClick={(e) => {
            this.clickHandler(e);
          }}
        >
          Click
        </button>
      </div>
    );
  }


}
Component1.propTypes={
  name:PropTypes.string.isRequired,
  course:PropTypes.string.isRequired

}
Component1.defaultProps = {
  name:"Raish",
  course:"JS"
}