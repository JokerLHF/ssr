import { SET_TRANS_LIST } from './contants';
const setList = (list) => ({
  type: SET_TRANS_LIST,
  list
})
export const getTranstionList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translation')
      .then(res => {
        dispatch(setList(res.data));
      })
  }
}