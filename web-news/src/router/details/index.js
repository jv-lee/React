import React, { Component } from 'react';
import { Card } from 'antd';
import { getDetailsById } from '../../net/request';
import './style.css';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'title',
      content: 'content'
    }
  }

  componentDidMount () {
    getDetailsById(this.props.match.params.id)
      .then(data => {
        this.setState(data);
      });
  }

  render () {
    return (
      <div>
        <Card title={this.state.title} >
          <div className="detail-content" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        </Card>
      </div>
    );
  }
}

export default Details;