require('purecss/build/pure.css');
require('purecss/build/grids-responsive.css');
require('../sass/main.scss');

import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';

render(
  <App />,
  document.getElementById('root')
)
