import React from 'react';
import { connect } from 'react-redux';
import { signout } from 'reduxUtility/actions/auth';

class Signout extends React.Component {
    componentDidMount(){
        this.props.auth_signout();
    }

    render() {
        return (
            <div>
                <h1>Sorry to see to you!</h1>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth_signout: () => dispatch(signout())
    }
};

export default connect(null, mapDispatchToProps)(Signout);