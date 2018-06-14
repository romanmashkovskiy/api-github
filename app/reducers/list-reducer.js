export default function listReducer(state = null, action) {
    switch(action.type) {
        case "LOAD_DATA_SUCCESS":
            console.log(action.payload)
            return action.payload
        default:
            return state;
    }
}

