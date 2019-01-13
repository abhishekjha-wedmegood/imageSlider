import { SET_MESSAGE } from '../types/message';
export const setMessage = message => {
  return dispatch => {
    fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed').then(resp=>resp.json()).then(res=>console.log(res))
    dispatch({
       type: SET_MESSAGE,
       payload: {
        message
       }
    })
  }
}

// import { put } from 'redux-saga/effects'

// import { SET_MESSAGE } from '../types/message';

// export function* setMessage(message) {
//   // const products = yield call(Api.fetch, '/products')
//   yield put({ type: SET_MESSAGE, payload: {message} })
// }

// export default setMessage;

// export const setMessage = (message) => {
//   return dispatch => {
//     dispatch({
//        type: SET_MESSAGE,
//        payload: {message}
//     })
//   }
// }