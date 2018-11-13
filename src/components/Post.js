import React, { Component } from 'react';
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        const post = this.props.post
        return (
          <div className="post" align="center">
                <div>
                    <img className="picture" alt="" src={post.data.url} />
                    <p className="title">{post.data.title}</p>
                    <div className="information" >
                        <p>{post.data.author} {post.data.num_comments}</p>
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
