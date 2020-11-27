import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_TOP10 = 'GET_TOP10';

const BASE_URI = "https://private-bf0ebc-n5101.apiary-mock.com/api";

export function getCategories() {
    return dispatch => {
        return axios.get(`${BASE_URI}/spa/categories`)
            .then(res => res.data)
            .then(res => {
                dispatch({ type: GET_CATEGORIES, payload: res.data });
            });
    }
}

export function getTop10() {
    return dispatch => {
        return axios.get(`${BASE_URI}/ctas/top10`)
            .then(res => res.data)
            .then(res => {
                dispatch({ type: GET_TOP10, payload: res.data });
            });
    }
}