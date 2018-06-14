import React, {Component} from 'react';


class Repository extends Component {

    render () {
        return (
            <div className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <a className="header" onClick={() => this.props.select(this.props.repository)}>{this.props.repository.name}</a>
                    <div className="description">{this.props.repository.description}</div>
                </div>
            </div>
        );
    }
}

export default Repository;

