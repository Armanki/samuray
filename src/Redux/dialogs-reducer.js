const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
        dialogs: [
            {id: 1, name: "Arman"},
            {id: 2, name: "Serob"},
            {id: 3, name: "Hakob"},
            {id: 4, name: "Raz"},
            {id: 5, name: "Gor"},
            {id: 6, name: "Levon"}
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "how is your samuray"},
            {id: 3, message: "yey"},
            {id: 4, message: "yey"},
            {id: 5, message: "yey"}
        ],
        newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
          return  {
                ...state,
                newMessageBody: action.body
            }
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const opdateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;