import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

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
      <Fragment>
        <div>{this.props.number}</div>
        <Button style={{
          margin: 30
        }} type="primary">按钮</Button>
      </Fragment>
    );
  }

}

export default LifecycleChild;