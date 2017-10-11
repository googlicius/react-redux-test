import React from 'react';
import { connect } from 'react-redux';

import { initRouter } from '../actions/RouterActions';
import Root from '../components/Root';
import App from '../App';

import { INDEX_PATH } from '../constants/RouterConstants';

const RootContainer = (props) => <Root {...props} />

const mapStateToProps = (state) => {
    const { router } = state;

    return {
        paths: [INDEX_PATH],
        router,
        routes: {
            [INDEX_PATH]: App
        }
    };
};

export default connect(mapStateToProps, {initRouter})(RootContainer);