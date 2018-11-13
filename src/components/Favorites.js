import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Post } from './index'

class Favorites extends Component {
    render() {
        return (
            <div>
                <h1>Favorites</h1>
            </div>
        );
    }
}

const mapStateToProps = ({ posts: { user, posts } }) => ({ user, posts })

export default connect(mapStateToProps)(Favorites)
