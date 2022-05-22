import {types} from '../actions/types';
import {getAllVideoIDs} from '../apis/contactApi';
import {put, call, takeEvery} from 'redux-saga/effects';

function* getAllVideoId() {
  try {
    const video = yield call(getAllVideoIDs);
    yield put({type: types.GET_ALL_VIDEO_ID_SUCCESS, payload: video});
  } catch (err) {
    //yield put({type: types.GET_ALL_VIDEO_ID_FAIL, payload: err});
    console.log(err);
  }
}

export default function* contactSaga() {
  yield takeEvery(types.GET_ALL_VIDEO_ID, getAllVideoId);
}
