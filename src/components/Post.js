import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

class Post extends Component {
    render() {
        const post = this.props.post
        return (
          <div className="post" align="center">
                <div className="pictureicon">
                <button className="huge ui button circular ui icon button ui basic button">
                <Icon color="red" name="heart" />
              </button>
                </div>
                    <img className="picture" alt="" src={post.data.url} />
                    <p className="title">{post.data.title}</p>
                    <div className="information" >
                        <p><Icon name="user"/>{post.data.author} <Icon name="lightning"/>{post.data.num_comments}</p>
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
