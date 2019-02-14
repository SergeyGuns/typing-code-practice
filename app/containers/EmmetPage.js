import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Emmet from '../components/Emmet';
import { handleInputText, handleSubmiteInput } from '../modules/emmet';

function mapStateToProps({
  emmet: { inputValue, resultValue, cssSnippets, cssSnippetsDone }
}) {
  return {
    inputValue,
    resultValue,
    cssSnippets,
    cssSnippetsDone
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleInputText, handleSubmiteInput }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Emmet);
