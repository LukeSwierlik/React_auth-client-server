import React from 'react';
import { connect } from 'react-redux';
import SigninForm from 'components/Auth/SigninForm';
import {signin} from "../../reduxUtility/actions/auth";
import Alert from 'components/UI/Alert/Alert';

class Signin extends React.Component {
    onSubmit = (formProps) => {
        console.log('[Signin] formProps', formProps);

        this.props.auth_signin(formProps, () => {
            this.props.history.push('/feature');
        });
    };

    render() {
        const { errorMessage } = this.props;

        return (
            <React.Fragment>
                <h1>Sign In - Login</h1>

                {errorMessage && (
                    <Alert message={errorMessage}/>
                )}

                <SigninForm onSubmit={this.onSubmit}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth_signin: (formProps, callback) => dispatch(signin(formProps, callback))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);