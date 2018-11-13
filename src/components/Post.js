import React, { Component } from 'react';
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        const post = this.props.post
        return (
            <div>
                <div>
                    <img alt="" src={post.data.url} />
                    <p>{post.data.title}</p>
                    <div>
                        <p> {post.data.author} {post.data.num_comments}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts: { posts, favorites } }) => ({ posts, favorites })

const mapDispatchToProps = (dispatch) => {
    return {
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Post)
