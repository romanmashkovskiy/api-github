import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { select, getList} from "../actions";


class  RepositoryList extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount(){
        this.props.getList();
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
        select: select,
        getList: getList
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RepositoryList);