import {CREATE_POST} from "./types";
import {showAlert} from "./action";

const forbidden = ['fuck', 'spam', "php"];

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === CREATE_POST){
                //console.log("mw");
                const found = forbidden.filter(w => action.payload.title.includes(w));
                if(found.length>0){
                    return dispatch(showAlert("spam!"));
                }
            }
            return next(action);
        }


    }

}