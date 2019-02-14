import React from 'react';
import './Emmet.css';

const filterDoneSnippet = cssSnipsDone => snippet =>
  !~cssSnipsDone.indexOf(snippet);

const handleKeyTabAndEnter = handler => ev => {
  if (ev.key === 'Enter' || ev.key === 'Tab') {
    ev.preventDefault();
    handler(ev);
  }
};

const Emmet = props => {
  return (
    <div className='Emmet'>
      <div>
        <div>
          <input
            className='Emmet__input'
            onChange={props.handleInputText}
            onKeyPress={handleKeyTabAndEnter(props.handleSubmiteInput)}
            name='emmet-input'
            id='emmet-input'
            cols='60'
            rows='20'
            value={props.inputValue}
          />
        </div>
        <div className='Emmet__result'>
          <pre>{props.resultValue}</pre>
        </div>
      </div>
      <div>
        <ul>
          {Object.keys(props.cssSnippets)
            .filter(filterDoneSnippet(props.cssSnippetsDone))
            .map(snippet => (
              <li key={snippet}>
                <abbr title={snippet}>
                  <pre>{props.cssSnippets[snippet]}</pre>
                </abbr>{' '}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Emmet;
