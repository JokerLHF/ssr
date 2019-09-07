import { HOME_LIST } from './contants';
const defaultState = {
  name: 'joker',
  newList: [],
}
const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HOME_LIST:
      return {
        ...state,
        newList: action.list
      }
    default:
      return state;
  }
}

export default homeReducer;
