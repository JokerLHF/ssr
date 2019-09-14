import { SET_TRANS_LIST } from './contants';

const defaultState = {
  translationList: [],
}

const TransReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRANS_LIST:
      return {
        ...state,
        translationList: action.list,
      }
    default:
      return state;
  }
}

export default TransReducer;