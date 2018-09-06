import React from 'react';
import requireAuth from 'hoc/requireAuth';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Feature extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Feature!</h1>

                <div className="jumbotron">
                    <h1 className="display-4">Hello, {this.props.email}</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email
    }
};


export default compose(
    requireAuth,
    connect(mapStateToProps)
)(Feature);