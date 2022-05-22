import {types} from './types';

export function fetchVideoID(data) {
  return {
    type: types.GET_ALL_VIDEO_ID,
    payload: data,
  };
}
