import axios from 'axios';
import {fetchTextSuccess, fetchTextFailed} from "./text-actions";

export const fetchText = (dispatch) => {
    axios.get('http://www.randomtext.me/api/')
        .then((response) => {
            dispatch(fetchTextSuccess(response));
        })
        .catch((error)=>{
            dispatch(fetchTextFailed(error));
        })
};