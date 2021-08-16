import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { prefix } from '@/config';

import Home from './views/home/Home';
import Login from './views/login/Login';

const App: FC = () => (
    <BrowserRouter basename={prefix}>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);
export default App;
