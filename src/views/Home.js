import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {tableActions} from './HomeRedux'
import ArticleTable from '../components/Home/Table';
import { push } from 'react-router-redux';

@connect(state => ({
    table: state.home.table
}), dispatch => ({
  tableActions: bindActionCreators(tableActions, dispatch)
}))
export default class ArticleCRUD extends Component {
  render() {
    return (
      <div>
        <ArticleTable {...this.props.table} {...this.props.tableActions}/>
      </div>
    )
  }
}

