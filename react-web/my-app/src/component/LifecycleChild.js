import React, { Component } from 'react';

class LifecycleChild extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * props 数据发生改变时 首次执行的函数
   */
  componentWillReceiveProps () {
    console.log('child componentWillReceiveProps()');
  }

  render () {
    return (
      <div>{this.props.number}</div>
    );
  }

}

export default LifecycleChild;