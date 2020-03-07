import React, { Component } from 'react';
import Nav from './Nav';
import {Route, Switch} from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';

class Frame extends Component {
  render() {
    return (
      <div className='frame'>
        <section className='header'>
          <Nav/>
        </section>
        <section className='Container'>
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' component={Detail} />
        </section>
      </div>
    );
  }
}

export default Frame
