import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux'; 

import classes from './Layout.module.css'; 
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }); 
    }

    render () {
        return (
            <Fragment>
                <Toolbar 
                    isAuth = {this.props.isAuthentiacted}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth = {this.props.isAuthentiacted} 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthentiacted: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);