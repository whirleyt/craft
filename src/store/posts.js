import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const ADD_FAVORITE = 'ADD_FAVORITE'
const DELETE_FAVORITE = 'DELETE_FAVORITE'

const initialState = {
  posts: [],
  favorites: []
}

const getPosts = posts => ({ type: GET_POSTS, posts })
const addFavorite = favorite => ({ type: ADD_FAVORITE, favorite })
const deleteFavorite = favorite => ({ type: DELETE_FAVORITE, favorite })

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

export const deleteFav = (favorite) => async dispatch => {
  try {
    dispatch(deleteFavorite(favorite))
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
    case DELETE_FAVORITE:
      const filtered = state.favorites.filter(favorite => action.favorite.name !== favorite.data.name)
      return Object.assign({}, state, { favorites: filtered })
    default:
      return state
  }
}