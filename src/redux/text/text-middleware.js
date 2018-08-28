import {actionTypes} from "./text-actions";
import {fetchText} from "./text-service";

export default store => next => action => {
    switch (action.type) {
        case actionTypes.FETCH_TEXT:
            fetchText(store.dispatch);
            break;
        default:next(action);
    }
    next(action);
}