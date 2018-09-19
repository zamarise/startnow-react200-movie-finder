import { connect } from 'react-redux';
import MovieSearchContainer from '../../containers/MovieSearchContainer';

const mapStateToProps = state => {
  return {
    name: state.search.name,
  };
};

export default connect(mapStateToProps)(MovieSearchContainer);
