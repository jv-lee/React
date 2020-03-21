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
      <BrowserRouter>
        <Layout style={{ minWidth: 1300, height: '100%' }}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/details/:id" component={Details} />
              <Route path="/:id?" component={PageList} />
            </Switch>
          </Content>
          <Footer className="footer">@copyright Dell-Lee 2020</Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
