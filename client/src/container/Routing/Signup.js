import React from 'react';
import SignupForm from "components/Auth/SignupForm";
import { connect } from 'react-redux';
import { signup } from 'reduxUtility/actions/auth';
import Alert from "components/UI/Alert/Alert";

class Signup extends React.Component {
    onSubmit = (formProps) => {
        this.props.auth_signup(formProps, () => {
            this.props.history.push('/feature');
        });
    };

    render() {
        const { errorMessage } = this.props;

        return (
            <React.Fragment>
                <h1>Sign Up - Register a new account</h1>

                {errorMessage && (
                    <Alert message={errorMessage}/>
                )}

                <SignupForm onSubmit={this.onSubmit}/>
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
        auth_signup: (formProps, callback) => dispatch(signup(formProps, callback))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);