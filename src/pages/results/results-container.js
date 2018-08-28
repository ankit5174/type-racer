import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import Results from "./results";

function mapStateToProps(state) {
    return {
        score: state.textReducer.score
    }
}

export default withRouter(connect(mapStateToProps, null)(Results));
