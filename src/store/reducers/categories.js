const initialState = {
    categories: []
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}