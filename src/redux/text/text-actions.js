export const actionTypes = {
    FETCH_TEXT: 'FETCH_TEXT',
    FETCH_TEXT_FAILED: 'FETCH_TEXT_FAILED',
    FETCH_TEXT_SUCCESS: 'FETCH_TEXT_SUCCESS',
    UPDATE_SCORE: 'UPDATE_SCORE'
};

export const fetchText = () => {
    return {
        type: actionTypes.FETCH_TEXT
    }
};

export const fetchTextSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_TEXT_SUCCESS,
        payload
    }
};

export const fetchTextFailed = (error) => {
    return {
        type: actionTypes.FETCH_TEXT_FAILED,
        error
    }
};

export const updateScore = (typedSentence) => {
    return {
        type: actionTypes.UPDATE_SCORE,
        typedSentence
    }
};