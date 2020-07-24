import {combineReducers} from 'redux';
import auth from './AuthReducer';
import data from './DataReducer';
const IndexReducer = combineReducers({
  auth: auth,
  data: data,
});
export default IndexReducer;
