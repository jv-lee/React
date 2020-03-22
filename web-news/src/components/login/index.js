import React, { Component } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { isLoginStatus, login } from '../../net/request';
import './style.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false,
      modal: false,
      username: '',
      password: ''
    }
    this.setModalVisible = this.setModalVisible.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  /**
   * 
   * @param {true 显示，false 隐藏} visible 
   */
  setModalVisible (visible) {
    this.setState({ modal: visible });
  }

  changeUser (e) {
    this.setState({ username: e.target.value });
  }

  changePassword (e) {
    this.setState({ password: e.target.value });
  }

  checkLogin () {
    const { username, password } = this.state;
    login(username, password)
      .then(data => {
        console.log(data);
        if (data.login) {
          message.success('登陆成功');
          this.setModalVisible(false);
        } else {
          message.error('登陆失败');
        }
      });

  }

  render () {
    const { login } = this.state;
    return (
      <div className="login">
        {
          login ?
            <Button type="primary">退出</Button>
            :
            <Button type="primary" onClick={() => this.setModalVisible(true)}>登陆</Button>
        }
        <Modal
          title="登陆"
          visible={this.state.modal}
          onOk={this.checkLogin}
          onCancel={() => this.setModalVisible(false)}
        >
          <Input placeholder="请输入用户名" style={{ marginBottom: 10 }} value={this.state.username} onChange={this.changeUser} />
          <Input placeholder="请输入密码" type="password" value={this.state.password} onChange={this.changePassword} />
        </Modal>
      </div>
    );
  }

  componentDidMount () {
    isLoginStatus()
      .then(data => {
        this.setState({
          login: data.login
        });
      })
  }

}

export default Login;