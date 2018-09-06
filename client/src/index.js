import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routing_index from 'routing/routing_index';
import { Provider } from 'react-redux';
import store from 'reduxUtility/store/store';


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    {routing_index.map((route, index ) => (
                        <Route path={route.path} component={route.component} exact={route.exact} key={index}/>
                    ))}
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
