import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {opdateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(opdateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer