import React, { Component } from 'react';

class LifecycleChild extends Component {

  // constructor(props){
  //   super(props);
  // }

  render () {
    console.log('child render');
    return (
      <div>{this.props.number}</div>
    );
  }

}

export default LifecycleChild;