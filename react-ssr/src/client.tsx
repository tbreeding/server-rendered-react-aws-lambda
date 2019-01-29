import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import env from './env/ClientEnv';

hydrate(
    <BrowserRouter>
        <App
          env={env}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
