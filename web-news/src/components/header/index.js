/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import axios from 'axios';
import logo from './logo.png';
import './style.css';

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  /**
   * 从网络中获取menu item数据
   */
  getMenuItemDataByNetwork () {
    axios.get('http://www.dell-lee.com/react/api/header.json')
      .then((res) => {
        this.setState({
          list: res.data.data
        });
      });
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
    this.getMenuItemDataByNetwork();
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