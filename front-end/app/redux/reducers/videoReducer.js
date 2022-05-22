import {types} from '../actions/types';

const initialState = {
  loading: false,
  user: [],
  error: {},
};

export default videoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_ALL_VIDEO_ID:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_VIDEO_ID_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    default:
      return state;
  }
};
