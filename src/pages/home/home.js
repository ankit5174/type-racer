import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../components/timer/timer';
import './home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputEnabled: true, errorLength: 0, lastPosition: 0, length: 0};
        this.onChange = this.onChange.bind(this);
        this.onInitialization = this.onInitialization.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }

    componentDidMount() {
        let {fetchText} = this.props;
        fetchText();
    }

    onChange(event) {
        let inputText = event.target.value;
        let {displayText} = this.props;
        let nextString = displayText.slice(this.state.lastPosition, displayText.indexOf(' ', this.state.lastPosition));
        if (inputText.charAt(inputText.length - 1) === ' ') {
            if (nextString === inputText.trim()) {
                this.setState((prevState, props) => {
                    return {
                        length: 0,
                        lastPosition: prevState.lastPosition + prevState.length + 1,
                    };
                });
                this.input.value = '';
            } else if (this.state.errorLength > 0 && inputText.length !== (this.state.errorLength + this.state.length + 1)) {
                this.setState((prevState, props) => {
                    return {
                        errorLength: prevState.errorLength - 1
                    };
                })
            } else if (inputText !== '' && nextString.substr(0, inputText.length) !== inputText) {
                this.setState((prevState, props) => {
                    return {
                        errorLength: prevState.errorLength + 1
                    };
                })
            }
        } else if (!(this.state.errorLength > 0) && this.state.length !== 0 && inputText.length !== this.state.length + 1) {
            this.setState((prevState, props) => {
                return {
                    length: prevState.length - 1
                };
            })
        } else if (!(this.state.errorLength > 0) && inputText !== '' && nextString.substr(0, inputText.length) === inputText) {
            this.setState((prevState, props) => {
                return {
                    length: prevState.length + 1
                };
            })
        } else if (this.state.errorLength > 0 && inputText.length !== (this.state.errorLength + this.state.length + 1)) {
            this.setState((prevState, props) => {
                return {
                    errorLength: prevState.errorLength - 1
                };
            })
        } else if (inputText !== '' && nextString.substr(0, inputText.length) !== inputText) {
            this.setState((prevState, props) => {
                return {
                    errorLength: prevState.errorLength + 1
                };
            })
        }
    }

    onComplete() {
        let {updateScore, history, displayText} = this.props;
        updateScore(displayText.slice(0, this.state.lastPosition));
        history.push('/results');
    }

     onInitialization() {
        this.setState({inputEnabled: false});
     }

    render() {
        let {displayText} = this.props;
        return (
            <div className="container">
                <div className="timer">
                    <Timer onInitialization={this.onInitialization} onComplete={this.onComplete}/>
                </div>

                <div className="display-text">
                    <span className="green">
                        {displayText.slice(0, this.state.lastPosition)}
                    </span>
                    <span className="current">
                        {displayText.substr(this.state.lastPosition, this.state.length)}
                    </span>
                    {this.state.errorLength > 0 ?
                        <span>
                            <span className="error">
                                {displayText.substr(this.state.lastPosition + this.state.length, this.state.errorLength)}
                            </span>
                            <span>
                                {displayText.slice(this.state.lastPosition + this.state.length + this.state.errorLength)}
                            </span>
                        </span>
                        :
                        <span>
                            {displayText.slice(this.state.lastPosition + this.state.length)}
                        </span>
                    }

                </div>
                <div className="input-dialog">
                    <input disabled={this.state.inputEnabled} onChange={this.onChange} ref={(ref) => this.input = ref}
                           type="text"/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    displayText: PropTypes.string,
    fetchText: PropTypes.func,
    updateScore: PropTypes.func
};