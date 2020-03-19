import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import AppHeader from './components/header/index';
import 'antd/dist/antd.css';
import './style.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render () {
    return (
      <Layout style={{ minWidth: 1300 }}>
        <Header className="header">
          <AppHeader />
        </Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
