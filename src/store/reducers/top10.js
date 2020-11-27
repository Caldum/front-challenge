const initialState = {
    top10: []
}

export default function accountsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TOP10':
            return {
                ...state,
                top10: action.payload
            }
        default:
            return state;
    }
}