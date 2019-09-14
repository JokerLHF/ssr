import { HOME_LIST } from './contants';
const changeList = (list) => ({
  type: HOME_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news')
      .then(res => {
        dispatch(changeList(res.data));
      })
  }
}