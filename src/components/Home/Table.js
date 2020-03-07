import React, { Component } from 'react';
import { Table } from 'antd';

const columns =[{
  title: '标题',
  dataIndex: 'title',
  key: 'title'
}, {
  title: '描述',
  dataIndex: 'desc',
  key: 'desc'
}, {
  title: '发布日期',
  key: 'date',
  dataIndex: 'date'
}]

class ArticleTable extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
  
  render() {
    return (
      <div>
        <div>
          <input
            type='text'
            placeholder='请输入关键字'
            value={this.props.query}
            onChange={this.props.changeQuery}
          />
          <button onClick={this.props.search}>搜索</button>
        </div>
        <Table columns={columns} dataSource={this.props.articles}  loading={this.props.loading} />

      </div>
    )
  }
}

export default ArticleTable
