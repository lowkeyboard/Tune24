import {GET_VIDEO_ID_SUCCESS} from './actions';

const initialState = {
  id: 'id1',
  name: 'Michael',
  email: 'michael@example.com',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_ID_SUCCESS: {
      const {id, name, email} = action.payload;

      return {
        id,
        name,
        email,
      };
    }
    default:
      return state;
  }
};

export {reducer};
