import store from './index'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)
 
export default persistor