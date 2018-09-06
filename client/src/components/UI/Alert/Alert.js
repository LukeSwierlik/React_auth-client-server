import React from 'react';

const Alert = (props) => {
    return (
        <div className={'mb-4'}>
            <div className="alert alert-danger" role="alert">
                {props.message}
            </div>
        </div>
    )
};

export default Alert;