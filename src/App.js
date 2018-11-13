import React, { Component } from 'react';
import './App.css';
import { fetchPosts } from './store/posts'
import { connect } from 'react-redux'
import history from './history'
import { Router } from 'react-router-dom'
import Routes from './Routes'
import { Navbar } from './components'

class App extends Component {

  componentDidMount() {
    this.props.loadPosts()
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ posts: { user, posts } }) => ({ user, posts })

const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts() {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
