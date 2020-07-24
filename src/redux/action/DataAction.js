import {FETCH_DATA} from '../type/DataType';
export const request = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};
