import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Home from "./home";
import {fetchText, updateScore} from "../../redux/text/text-actions";

function mapStateToProps(state) {
    return {
        displayText: state.textReducer.text
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        fetchText: () => {dispatch(fetchText());},
        updateScore: (typedSentence) => {dispatch(updateScore(typedSentence))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Home));
