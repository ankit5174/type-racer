import React from 'react';
import PropTypes from 'prop-types';
import './results.css';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {score} = this.props;
        return (
            <div className="results-container">
                <div className="header">
                    <b>Results</b>
                </div>
                <div className="results">
                    Word Cound: {score} wpm
                </div>
                <div onClick={()=>{this.props.history.push('/')}} className="footer">
                    Back
                </div>
            </div>
        );
    }
}

Results.propTypes = {
    score: PropTypes.number
};