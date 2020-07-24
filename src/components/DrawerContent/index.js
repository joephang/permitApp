import {connect} from 'react-redux';
import DrawerContent from './DrawerContent';
import {auth} from '../../redux/action/AuthAction';

const mapStateToProps = (state) => ({
  auth: state.auth.token,
});

// redux store in here
const mapDispatchToProps = (dispatch) => {
  return {
    FetchToken: (token) => dispatch(auth(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
