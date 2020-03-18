import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import TodoList from './component/TodoList';
import Lifecycle from './component/Lifecycle';
import Parent from './component/Parent';
import RouterComponent from './component/RouterComponent';

// <div><App /><Test /></div>
ReactDOM.render(
  <RouterComponent />, document.getElementById('root'));

