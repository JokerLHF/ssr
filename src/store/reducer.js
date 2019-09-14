import { combineReducers } from 'redux';
import homeReducer from '../containers/Home/store/reducer';
import headerReducer from '../compoments/Header/store/reducer';
import TransReducer from '../containers/Translation/store/renducer';
const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  trans: TransReducer
})

export default reducer;
