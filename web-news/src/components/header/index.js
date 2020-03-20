/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import logo from './logo.png';
import './style.css';
import { getMenuData } from '../../net/request';

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  /**
   * 构建menu item 元素
   */
  buildMenuItemViews () {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id}>
          <SmileOutlined />{item.title}
        </Menu.Item>
      );
    });
  }

  componentDidMount () {
    getMenuData()
      .then(data => {
        this.setState({
          list: data
        });
      });
  }

  render () {
    return (
      <Fragment>
        <img className="app-header-logo" src={logo} />
        <Menu mode="horizontal"
          className="app-header-menu">
          {this.buildMenuItemViews()}
        </Menu>
      </Fragment>
    );
  }
}

export default AppHeader;