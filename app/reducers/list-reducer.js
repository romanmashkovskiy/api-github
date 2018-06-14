export default function listReducer(state = [], action) {
    switch(action.type) {
        case "LOAD_DATA_SUCCESS":
            return action.payload
        default:
            return state;
    }
}

