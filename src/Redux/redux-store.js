import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";
import authReduser from "./auth-reducer";
import thunkMiddlewarw from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddlewarw))

export  default  store