import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { routing_link } = this.props;

        return (
            <div className={'d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'}>
                <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>

                <nav className="my-2 my-md-0 mr-md-3">
                    {routing_link.map((link, index) => (
                        <Link to={link.path} className="p-2 text-dark" key={index}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        )
    }
}

export default Header;