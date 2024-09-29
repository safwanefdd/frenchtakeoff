import axios from "axios";

export const GET_RESSOURCES = "GET_RESSOURCES";

export const getRessources = () => {
    return (dispatch) => {
        return axios.get("http://localhost:4000/ressources").then((res) => {
            dispatch({type: GET_RESSOURCES, payload: res.data});
        });
    };
};

export const ADD_RESSOURCE = "ADD_RESSOURCE";

export const addRessource = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:4000/ressources", data).then((res) => {
            dispatch({type: ADD_RESSOURCE, payload: data});
        });
    };
};