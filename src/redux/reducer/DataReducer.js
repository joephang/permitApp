import {FETCH_DATA} from '../type/DataType';
const initialState = {
  data: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
