import axios from 'axios';
import { HOME_LIST } from './contants';
const changeList = (list) => ({
  type: HOME_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch) => {
    axios.post('https://easy-mock.com/mock/5cb6e6e3270aa324bd519b60/topview/course')
      .then(res => {
        dispatch(changeList(res.data.data.records));
      })
  }
}