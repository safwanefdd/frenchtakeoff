import {GET_RESSOURCES} from "../actions/ressource.action";

const initialState = {};

export default function ressourceReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESSOURCES:
            return action.payload;
        default:
            return state;
    }
}