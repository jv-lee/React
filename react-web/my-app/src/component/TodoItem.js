import React, { Component } from 'react';

/**
 * 子组件
 */
class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleItemDelete () {
    const { deleteFun, index } = this.props;
    deleteFun(index);
  }

  render () {
    //子组件获取父组件传递的参数
    const { content } = this.props;
    return (
      //子组件向父组件通信通过调用方法的形式
      <li>{content}
        <button onClick={this.handleItemDelete}>delete</button>
      </li>
    );
  }
}

export default TodoItem;