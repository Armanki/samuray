const UPDARE_NEW_MESSAGE_BODY = "UPDARE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case "UPDARE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}
export let sendMessageCreator = () => ({type: SEND_MESSAGE});
export let opdateNewMessageBodyCreator = (body) => ({type: UPDARE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;