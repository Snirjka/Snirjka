import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
                bar
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);
