import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import AppHeader from './components/header';
import PageList from './router/list';
import Details from './router/details';
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
        <Content className="content">
          <BrowserRouter>
            <Switch>
              <Route path="/details" component={Details} />
              <Route path="/" component={PageList} />
            </Switch>
          </BrowserRouter>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
