import { IS_LOGIN } from './contants';
import { id } from '../../../publicConstant';
const changeLogin = ({ id, login }) => ({
  type: IS_LOGIN,
  id,
  login
})
export const getIsLogin = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin/' + id)         // 1表示id, 写死的id
      .then(res => {
        dispatch(changeLogin({ id: id, login: res.data }));
      })
      .catch(e => console.log(e));
  }
}

export const layout = (id) => {
  // const data = JSON.parse({ id });
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.post('/api/layout', { id })
      .then(res => {
        dispatch(changeLogin({ id: id, login: false }));
      })
      .catch(e => console.log(e));
  }
}

export const layIn = (id) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.post('/api/layIn', { id })
      .then(res => {
        dispatch(changeLogin({ id: id, login: true }));
      })
      .catch(e => console.log(e));
  }
}