import React, { Component, Fragment } from 'react';
import '../css/style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.handlerInsertEvent = this.handlerInsertEvent.bind(this);
    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handlerKeyUp = this.handlerKeyUp.bind(this);

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
    const list = [...this.state.list, this.state.inputValue];
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
      return (
        <li key={index}>{value}
          <button onClick={this.handlerDeleteEvent.bind(this, index)}>delete</button>
        </li>
      );
    });
  }

  render () {
    return (
      <Fragment>
        {/* JSX 注释 */}
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