import { auth as actions } from 'reduxUtility/constants/actionsType';
import { updateObject } from "utility/utility";

const initial_state = {
    authenticated: '',
    errorMessage: '',
    email: ''
};

const authStart = (state, action) => {
    return updateObject(state, action);
};

const authSignup = (state, action) => {
    return updateObject(state, {
        authenticated: action.token,
        email: action.email
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        errorMessage: action.error
    });
};

const authSignout = (state, action) => {
    return updateObject(state, {
        authenticated: ''
    });
};

const authSignin = (state, action) => {
    return updateObject(state, {
        authenticated: action.token,
        email: action.email
    });
};

const authReducer = (state = initial_state, action) => {
    const payload = {
        [actions.AUTH_START]: authStart,
        [actions.AUTH_SIGNUP]: authSignup,
        [actions.AUTH_FAIL]: authFail,
        [actions.AUTH_SIGNOUT]: authSignout,
        [actions.AUTH_SIGNIN]: authSignin
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default authReducer;