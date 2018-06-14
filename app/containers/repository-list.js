import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Repository from "./repository";
import { select} from "../actions";


class  RepositoryList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="ui relaxed divided list">
                    {
                        this.props.listRepository.map ((repository) => {
                            return (
                                <Repository key={repository.id} repository={repository}
                                select={this.props.select}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        listRepository: state.listRepository,
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
            select: select
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RepositoryList);