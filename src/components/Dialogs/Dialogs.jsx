import s from "./Dialogs.module.css";
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import React from "react"

const Dialogs = (props) => {
    let newDialodElement = React.createRef()
    let addDialog = () => {
        let text = newDialodElement.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newDialodElement}></textarea>
                <button onClick={addDialog}>add</button>
            </div>

        </div>

    )
}
export default Dialogs