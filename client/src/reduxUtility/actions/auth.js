import { auth as actions } from "../constants/actionsType";
import axios from 'axios';

const authStart = () => {
    return {
        type: actions.AUTH_START
    }
};

const authSignup = (token, email) => {
    return {
        type: actions.AUTH_SIGNUP,
        token,
        email
    }
};

const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error
    }
};

const authSignout = () => {
    return {
        type: actions.AUTH_SIGNOUT
    }
};

const authSignin = (email, token) => {
    return {
        type: actions.AUTH_SIGNIN,
        email,
        token
    }
};

export const signup = ({ email, password }, callback) => {
    return dispatch => {
        dispatch(authStart());
        const url = 'http://localhost:3090/signup';

        axios.post(url, {
            email,
            password
        })
        .then(response => {
            const token = response.data.token;
            const email = response.data.email;
            console.log('token', token);

            dispatch(authSignup(token, email));
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            callback();
        })
        .catch(err => {
            const errorMessage = 'Email is use';
            console.log('[ERROR]', err);

            dispatch(authFail(errorMessage));
        });
    }
};

export const signout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        dispatch(authSignout());
    }
};

export const signin = ({ email, password}, callback) => {
    return dispatch => {
        dispatch(authStart());

        const url = 'http://localhost:3090/signin';

        axios.post(url, {
            email,
            password
        })
        .then(response => {
            const token = response.data.token;
            const email = response.data.email;
            console.log('token', token);
            console.log('email', email);

            dispatch(authSignin(token, email));
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            callback();
        })
        .catch(err => {
            const errorMessage = 'Invalid email or password';
            console.log('[ERROR]', err);

            dispatch(authFail(errorMessage));
        });
    }
};