import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Haze from '../.';

const App = () => {
  return (
    <div>
      <Haze />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
