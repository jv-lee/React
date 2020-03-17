import React, { Component, Fragment } from 'react';
import LifecycleChild from './LifecycleChild';
/**
 * React生命周期示例
 */
class Lifecycle extends Component {

  constructor(props) {
    console.log('0.constructor()');
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      number: 1
    }
  }

  /**
   * 挂载前自动执行
   */
  UNSAFE_componentWillMount () {
    console.log('1.UNSAFE_componentWillMount()');
  }

  /**
   * 渲染时自动执行
   */
  render () {
    console.log('2.render()');
    return (
      <Fragment>
        <div onClick={this.handleClick}>React生命周期</div>
        <LifecycleChild number={this.state.number}></LifecycleChild>
      </Fragment>
    );
  }

  /**
   * 挂载后自动执行
   */
  componentDidMount () {
    console.log('3.componentDidMount()');
  }

  /**
   * 更新前自动执行
   */
  shouldComponentUpdate () {
    console.log('4.shouldComponentUpdate()');
    //如果页面不需要重新渲染 返回false 即可，提高性能； 反之既反；
    return true;
  }

  /**
   * 组件更新前
   */
  UNSAFE_componentWillUpdate () {
    console.log('5.UNSAFE_componentWillUpdate()');
  }

  /**
   * 组件更新后
   */
  componentDidUpdate () {
    console.log('6.componentDidUpdate()');
  }

  handleClick () {
    const newNumber = this.state.number + 1;
    this.setState({
      number: newNumber
    });
  }

}

export default Lifecycle;