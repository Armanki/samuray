import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProjileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settinds from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer />}/>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settinds/>}/>
                        <Route path="/users/*" element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>

    )
}

export default App;
