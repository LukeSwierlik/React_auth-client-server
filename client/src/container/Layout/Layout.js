import React from 'react';
import Header from "components/Layout/Header";
import routing_link from 'routing/routing_link';
import Content from "components/Layout/Content";

class Layout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                <Header routing_link={routing_link}/>

                <div className={'container'}>
                    <Content>
                        {children}
                    </Content>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;