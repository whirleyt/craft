import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Post } from './index'

class Favorites extends Component {
    render() {
        return (
            <div>
                {this.props.favorites.map((post, index) => {
                    return (
                        <div key={index}>
                            <Post post={post} posts={this.props.posts} isFavorite={true} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ posts: { user, posts, favorites } }) => ({ user, posts, favorites })

export default connect(mapStateToProps)(Favorites)
