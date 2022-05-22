import {spawn} from '@redux-saga/core/effects';

import contactSaga from './video-saga';

export default function* rootSaga() {
  yield spawn(contactSaga);
}
