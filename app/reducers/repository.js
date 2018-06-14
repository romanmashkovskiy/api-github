export default function (state=null, action) {
    switch (action.type) {
        case "DATA_REQUESTED":
            console.log(action.payload);
        default:
            return state;
    }
}

