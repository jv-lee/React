import React, { Component, Fragment } from 'react';
import LifecycleChild from './LifecycleChild';

/**
 * react生命周期demo
 */
class Lifecycle extends Component {

  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      counter: 1
    }
  }

  handleBtnClick () {
    //通过 ref 获取到的button元素节点 克获取到元素节点的原生属性
    console.log(this.buttonElem);
    const newCounter = this.state.counter + 1;

    console.log(this.state.counter);

    //setState是异步的
    // this.setState({
    //   counter: newCounter
    // })

    //使用当前方式setState 方式，会有一个回调函数 可以操作属性 可以获取最新的属性
    this.setState(() => {
      return {
        counter: newCounter
      }
    }, () => {
      console.log(this.state.counter);
    });
    console.log(this.state.counter);
  }

  render () {
    console.log('render');
    // 当组件初次创建的时候，render函数会被执行一次
    // 当state数据发生变更的时候，render函数会被重新执行
    // 当props数据发生变更的时候，render函数会被重新执行
    return (
      //通过ref获取原生元素节点  
      // ref 写在html标签上，获取的是dom节点
      // ref 写在组件标签上，获取的是组件的js实例
      <Fragment>
        <button
          onClick={this.handleBtnClick}
          ref={(button) => { this.buttonElem = button }}
        >Insert</button>
        <LifecycleChild number={this.state.counter}></LifecycleChild>
      </Fragment>
    );
  }

}

export default Lifecycle;