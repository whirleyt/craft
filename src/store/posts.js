import axios from 'axios'

const GET_POSTS = 'GET_POSTS'

const initialState = {
    user: { email: 'whirleyt@outlook.com', name: 'Tara Whirley' },
    posts: [],
  }

const getPosts = posts => ({ type: GET_POSTS, posts })

export const fetchPosts = () => async dispatch => {
    try {
      const res = await axios.get('https://www.reddit.com/r/analog/top/.json')
      dispatch(getPosts(res.data))
    } catch (err) {
      console.error(err)
    }
  }


  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
        return Object.assign({}, state, { posts: action.posts })
      default:
        return state
    }
  }