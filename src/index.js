/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';

import App from './containers/app';

require('./offline.html');
require('./client.js');
require('./sw.js');

require('./favicon.ico');

import './main.scss';

render(
    <App />,
    document.getElementById('app')
);
