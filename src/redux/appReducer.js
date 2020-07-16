import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

const initialState ={
    loading: false,
    alert: null
};
// pure functions
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case SHOW_ALERT:
            return {...state, alert: action.text};
        case HIDE_ALERT:
            return {...state, alert: null};
        default: return  state
    }
};