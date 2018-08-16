import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './Login';
import Signup from './Signup';
import Neighbors from './neighbors/AllNeighbors';
import SingleNeighbor from './neighbors/SingleNeighbor';
import {getUser} from '../store';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!state.user.id,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(getUser()),
    };
}

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return <div className='app'>
            {this.renderRoutes()}
        </div>;
    }

    renderRoutes() {
        return <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            {this.renderLoggedInRoutes()}
        </Switch>;
    }

    renderLoggedInRoutes() {
        if (this.props.isLoggedIn) {
            return <Switch>
                <Route path='/neighbors/:id' component={SingleNeighbor} />
                <Route path='/neighbors' component={Neighbors} />
            </Switch>;
        } else {
            return <Route component={Login} />;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};
