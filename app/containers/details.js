import React, {Component} from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    render () {
        if (!this.props.repositoryActive) {
            return (
                <h4 className="ui header">Select repository</h4>
            );
        }
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Full name</label>
                        <input type="text" value={this.props.repositoryActive.full_name}/>
                    </div>
                    <div className="field">
                        <label>Node id</label>
                        <input type="text" value={this.props.repositoryActive.node_id}/>
                    </div>
                    <div className="field">
                        <label>URL</label>
                        <input type="text" value={this.props.repositoryActive.url}/>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        repositoryActive: state.repositoryActive
    };
}

export default connect(mapStateToProps)(Details);