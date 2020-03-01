import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: `hello world`,
      list: [`learn React`, `learn Component`, `learn react-dom`]
    }
  }

  handlerInputChange (e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handlerInsertEvent (e) {
    if (this.state.inputValue === '') return;
    const list = [...this.state.list, this.state.inputValue];
    this.setState({
      inputValue: '',
      list
    });
  }

  handlerDeleteEvent (index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  render () {
    return (
      <Fragment>
        <input value={this.state.inputValue}
          onChange={this.handlerInputChange.bind(this)} />
        <button onClick={this.handlerInsertEvent.bind(this)}>Insert</button>
        <ul>
          {
            this.state.list.map((value, index) => {
              return (
                <li key={index}>{value}
                  <button onClick={this.handlerDeleteEvent.bind(this, index)}>delete</button>
                </li>
              );
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;