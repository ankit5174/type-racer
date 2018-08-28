import {actionTypes} from "./text-actions";

const DEFAULT_STATE = {
    text: '',
    score: 0
};

const getText = (state, payload) => {
    let text = payload.data.text_out;
    text = text.replace(/<[^>]*>/g, '').replace(/\./g, '. ').trim();
    return {
        ...state,
        text: text
    };
};

const updateScore = (state, typedSentence) => {
    let wordCount = typedSentence !== ''? typedSentence.split(' ').filter(n => n).length : 0;
    return {
        ...state,
        score: wordCount
    }
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TEXT_SUCCESS:
            return getText(state, action.payload);
        case actionTypes.UPDATE_SCORE:
            return updateScore(state, action.typedSentence);
        default:
            return state;
    }
}