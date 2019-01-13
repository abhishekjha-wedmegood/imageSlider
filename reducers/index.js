import { combineReducers } from 'redux'
import messageReducer from './message'
import searchImage from './ImageUrlReducer';

const reducers = combineReducers({
    messageReducer,
    searchImage
   })

export default reducers;
