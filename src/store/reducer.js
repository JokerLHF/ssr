import { combineReducers } from 'redux';
import homeReducer from '../containers/Home/store/reducer';

const reducer = combineReducers({
  home: homeReducer
})

export default reducer;
