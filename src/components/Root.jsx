import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Router from '../components/Router';

const propTypes = {
    initRouter: PropTypes.func.isRequired,
    paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    router: PropTypes.shape({
        keys: PropTypes.shape({}),
        options: PropTypes.shape({}),
        path: PropTypes.string
    }).isRequired,
    routes: PropTypes.shape({}).isRequired
};

class Root extends Component {
    componentWillMount() {
        const { initRouter, paths } = this.props;
        initRouter(paths);
    }

    render() {
        const { router, routes } = this.props;
        return (
            <div>
                <Router router={router} routes={routes} />
            </div>
        )
    }
}

Root.propTypes = propTypes;

export default Root;