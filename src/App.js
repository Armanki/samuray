import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProjileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settinds from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settinds/>}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path="/login" render={() => <LoginPage />}/>
                </div>
            </div>

    )
}

export default App;
