import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const ADD_FAVORITE = 'ADD_FAVORITE'

const initialState = {
  user: { email: 'whirleyt@outlook.com', name: 'Tara Whirley' },
  posts: [],
  favorites: []
}

const getPosts = posts => ({ type: GET_POSTS, posts })
const addFavorite = favorite => ({ type: ADD_FAVORITE, favorite })

export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://www.reddit.com/r/analog/top/.json')
    dispatch(getPosts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const addFav = (favorite) => async dispatch => {
  try {
    dispatch(addFavorite(favorite))
  } catch (err) {
    console.error(err)
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state, { posts: action.posts })
    case ADD_FAVORITE:
      const onlyOne = state.favorites.filter(favorite => action.favorite.name !== favorite.data.name)
      return Object.assign({}, state, { favorites: [...onlyOne, { data: action.favorite }] })
    default:
      return state
  }
}