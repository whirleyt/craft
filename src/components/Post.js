import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addFav, deleteFav } from '../store/posts';
import { Icon } from 'semantic-ui-react'

class Post extends Component {
    render() {
        const post = this.props.post
        return (
            <div className="post" align="center">
                <div className="pictureicon">
                    { this.props.isFavorite ?

                        <button onClick={(event) => this.props.deleteFav(event, post.data)} className="medium ui button circular ui icon button">
                            <Icon name="trash alternate" />
                        </button>

                        :
                        <button onClick={(event) => this.props.addFav(event, post.data)} className="huge ui button circular ui icon button ui basic button">
                            <Icon color="red" name="heart" />
                        </button>
                    }
                </div>
                <img alt="" className="picture" src={post.data.url} />
                <p className="title">{post.data.title}</p>
                <div className="information">
                    <p><Icon name="user" /> {post.data.author} <Icon name="lightning" /> {post.data.num_comments}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts: { posts, favorites } }) => ({ posts, favorites })

const mapDispatchToProps = (dispatch) => {
    return {
        addFav(event, data) {
            event.preventDefault();
            dispatch(addFav(data))
        },
        deleteFav(event, data) {
            event.preventDefault();
            dispatch(deleteFav(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
