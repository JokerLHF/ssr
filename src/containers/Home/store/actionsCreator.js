
import { HOME_LIST } from './contants';
const changeList = (list) => ({
  type: HOME_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/topview/Carousel')
      .then(res => {
        dispatch(changeList(res.data.data.records));
      })
      .catch(e => console.log(e));
  }
}