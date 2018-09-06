import React from 'react';
import {reduxForm, Field } from 'redux-form';

const SignupForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>

                <Field type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       name={'email'}
                       placeholder="Enter email"
                       component={'input'}
                />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>

                <Field type="password"
                       className="form-control"
                       id="exampleInputPassword1"
                       name={'password'}
                       placeholder="Password"
                       component={'input'}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default reduxForm({
    form: 'signup'
})(SignupForm);