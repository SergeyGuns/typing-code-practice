import { expandAbbreviation } from 'emmet';
import snippets from './snippets';
const TEXT_INPUT = 'emmet/TEXT_INPUT';
const SUBMIT_INPUT = 'emmet/SUBMIT_INPUT';
export const handleInputText = ev => ({
  type: TEXT_INPUT,
  payload: ev.target.value
});

export const handleSubmiteInput = ({ target: { value } }) => {
  if (snippets.css.snippets.hasOwnProperty(value));
  return {
    type: SUBMIT_INPUT,
    payload: value
  };
};

console.log(snippets.css.snippets);
const initState = {
  inputValue: '',
  resultValue: '',
  cssSnippets: snippets.css.snippets,
  cssSnippetsDone: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case TEXT_INPUT: {
      let emmetResult;
      try {
        emmetResult = expandAbbreviation(action.payload, 'css');
      } catch (e) {
        emmetResult = e.massage;
      }
      return {
        ...state,
        inputValue: action.payload,
        resultValue: emmetResult
      };
    }
    case SUBMIT_INPUT: {
      return {
        ...state,
        inputValue: '',
        resultValue: ''
        cssSnippetsDone: state.cssSnippetsDone.concat([action.payload])
      };
    }
    default:
      return state;
  }
}
