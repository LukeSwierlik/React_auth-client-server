import { combineReducers, applyMiddleware } from 'redux';
import authReducer from 'reduxUtility/reducers/auth';
import { createStore, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const storeReducers = combineReducers({
    auth: authReducer,
    form: formReducer
});

const store = createStore(
    storeReducers,
    {
        auth: {
            authenticated: localStorage.getItem('token')
        }
    },
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;