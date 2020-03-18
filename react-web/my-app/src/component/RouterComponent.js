import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Parent from './Parent';
import TodoList from './TodoList';
import Lifecycle from './Lifecycle';
import { Button } from 'antd';

/**
 * 路由类
 */
class RouterComponent extends Component {

  render () {
    return (
      <BrowserRouter>
        <Route path="/lifecycle" component={Lifecycle} />
        <Route path="/parent" component={Parent} />
        <Route path="/todo-list:id" component={TodoList} />
        <Link to="/todo-list/123">
          <Button style={{ margin: 50 }}>Link-TODO-LIST</Button>
        </Link>
      </BrowserRouter>
    );
  }

}

export default RouterComponent;