import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


class  RepositoryList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h3>1111</h3>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        repositories: state.repositories,
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({

    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RepositoryList);