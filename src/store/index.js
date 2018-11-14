import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import posts from './posts'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({ posts })

const persistConfig = {
  key: 'root',
  storage,
}

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, middleware)

export default store
export * from './posts'