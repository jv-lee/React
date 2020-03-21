import React, { Component } from 'react';
import { List, ConfigProvider, Empty } from 'antd';
import { getListData } from '../../net/request';
import { Link } from 'react-router-dom/cjs/react-router-dom';


//自定义数据样式
const customizeEmpty = () => (
  <Empty description="暂无内容"></Empty>
);

class PageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  initData () {
    getListData(this.props.match.params.id)
      .then(data => {
        this.setState({
          data
        });
      });
  }

  componentDidMount () {
    this.initData();
  }

  UNSAFE_componentWillReceiveProps () {
    this.initData();
  }

  render () {
    return (
      <div>
        <ConfigProvider renderEmpty={customizeEmpty} >
          <List
            style={{ background: '#fff' }}
            bordered
            dataSource={this.state.data}
            renderItem={item =>
              (
                <List.Item className="item">
                  <Link to={`/details/${item.id}`}>{item.title}</Link>
                </List.Item>
              )
            }
          />
        </ConfigProvider>
      </div>
    )
  }
}

export default PageList;