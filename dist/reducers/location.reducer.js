const initialState = {
    locations: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return Object.assign(Object.assign({}, state), { locations: action.payload });
        default:
            return state || null;
    }
};
