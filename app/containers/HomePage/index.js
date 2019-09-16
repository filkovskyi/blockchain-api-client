import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadBlock, loadBlockHash } from './actions';
import { makeSelectBlock } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = dispatch => ({
  onFetchBlock: () => dispatch(loadBlock()),
  onFetchBlockHash: (hash) => dispatch(loadBlockHash(hash)),
});

const mapStateToProps = createStructuredSelector({
  block: makeSelectBlock(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
export { mapDispatchToProps };
