import { IS_LOGIN } from './contants';
const defaultState = {
  id: null,
  login: false
}
const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        id: action.id,
        login: action.login
      }
    default:
      return state;
  }
}

export default headerReducer;
