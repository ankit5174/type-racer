import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

export default class Timer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            start: 0
        };
        this.renderer = this.renderer.bind(this);
    }

    renderer({hours, minutes, seconds, completed}) {
        if (completed) {
            return <div>
                <span>Start Now</span>;
                <Countdown
                    date={Date.now() + 60000}
                    onComplete={() => {
                        this.props.onComplete()
                    }}
                />
            </div>
        } else {
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    render() {
        return (
            <Countdown
                date={Date.now() + 5000}
                renderer={this.renderer}
                onComplete={() => this.props.onInitialization()}
            />
        )
    }
}

Timer.propTypes = {
    onInitialization: PropTypes.func,
    onComplete: PropTypes.func
};