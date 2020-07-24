import {connect} from 'react-redux';
import Signin from './Signin';
import {auth} from '../../redux/action/AuthAction';

const mapStateToProps = (state) => ({
  token: state.auth.token,
  data: state.data,
});

// redux store in here
const mapDispatchToProps = (dispatch) => {
  return {
    FetchToken: (token) => dispatch(auth(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
