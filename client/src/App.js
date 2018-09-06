import React from 'react';
import Layout from "./container/Layout/Layout";

class App extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <Layout>
                {children}
            </Layout>
        );
    }
}

export default App;
