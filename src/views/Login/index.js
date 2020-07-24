import {connect} from 'react-redux';
import Login from './Login';
import {auth} from '../../redux/action/AuthAction';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// redux store in here
const mapDispatchToProps = (dispatch) => {
  return {
    FetchToken: (token) => dispatch(auth(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
