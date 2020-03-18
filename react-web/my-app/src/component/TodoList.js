import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import '../css/style.css';

class TodoList extends Component {

  /**
   * 组件构造函数，完成数据初始化操作
   * @param {构造参数} props 
   */
  constructor(props) {
    super(props);

    //通过初始化的方式 初始赋值handlerInsertEvent.bind事件传递this指向 防止重复绑定消费
    this.handlerInsertEvent = this.handlerInsertEvent.bind(this);
    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handlerDeleteEvent = this.handlerDeleteEvent.bind(this);
    this.handlerKeyUp = this.handlerKeyUp.bind(this);

    //默认model数据
    this.state = {
      inputValue: `hello world`,
      list: [`learn React`, `learn Component`, `learn react-dom`]
    }
  }

  /**
   * 监听输入
   * @param {元素事件对象} e 
   */
  handlerInputChange (e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  /**
   * 添加item项
   * @param {元素事件对象} e 
   */
  handlerInsertEvent (e) {
    this.insertDataToList();
  }

  /**
   * 监听键盘up事件
   * @param {元素事件对象} e 
   */
  handlerKeyUp (e) {
    if (e.keyCode !== 13) return;
    this.insertDataToList();
  }

  /**
   * 清除输入框，将输入内容添加到list中
   */
  insertDataToList () {
    if (this.state.inputValue === '') return;
    //通过解构赋值 复制当前list，在之后加入一个新的数据
    const list = [...this.state.list, this.state.inputValue];
    //react 通过修改数据来更改ui显示 , list数据源和list同名，可省略key：value 的形式 直接简写
    this.setState({
      inputValue: '',
      list
    });
  }

  /**
   * 删除item项
   * @param {item下标} index 
   */
  handlerDeleteEvent (index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  /**
   * 获取items列表渲染方法
   */
  getListItems () {
    return this.state.list.map((value, index) => {
      //通过子组件 拆分功能 
      return (
        //父组件向子组件通信通过传递参数的方式 子组件通过this.props 来获取
        <TodoItem
          key={index}
          index={index}
          content={value}
          deleteFun={this.handlerDeleteEvent}
        />
      );
      // return (
      //   <li key={index}>{value}
      //     <button onClick={this.handlerDeleteEvent.bind(this, index)}>delete</button>
      //   </li>
      // );
    });
  }

  render () {
    console.log(this.props.match.params.id);
    return (
      <Fragment>
        {/* JSX 注释 点击label 聚焦input 通过 htmlFor="${id}" */}
        <label htmlFor="my-input">请输入内容：</label>
        <input id="my-input" className="input"
          value={this.state.inputValue}
          onChange={this.handlerInputChange}
          onKeyUp={this.handlerKeyUp} />
        <button onClick={this.handlerInsertEvent}>Insert</button>
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;