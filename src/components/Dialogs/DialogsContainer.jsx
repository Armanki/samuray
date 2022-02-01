import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {opdateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer