import {takeEvery, put} from 'redux-saga/effects';
import {GET_VIDEO_ID} from './actions';

function* handler() {
  yield takeEvery(GET_VIDEO_ID, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    // API call
    print('API Call');
    yield put({
      type: GET_VIDEO_ID,
      payload: {
        id: 'id1',
        name: 'Michael',
        email: 'anothertestemail@test.com',
      },
    });
  } catch (err) {
    // Handle error
  }
}

export {handler};
