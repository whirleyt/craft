import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Post } from './index'

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    { this.props.posts.data && this.props.posts.data.children.map((post, index) => {
                        return (
                            <div key={index}>
                                <Post post={post} posts={this.props.posts}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts: { user, posts } }) => ({ user, posts })

export default connect(mapStateToProps)(Home)
