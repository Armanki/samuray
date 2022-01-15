import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Massage = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Arman" id="1"/>
                <DialogItem name="Serob" id="2"/>
                <DialogItem name="Hakob" id="3"/>
                <DialogItem name="Raz" id="4"/>
                <DialogItem name="Gor" id="5"/>
                <DialogItem name="Levon" id="6"/>
            </div>
            <div className={s.massages}>
                <Massage message="hi"/>
                <Massage message="how is your samuray"/>
                <Massage message="yey"/>
                <Massage message="yey"/>
                <Massage message="yey"/>
            </div>

        </div>

    )
}
export default Dialogs