import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/'>
                        <Route path='profile'
                               element={<Profile
                                   posts={props.appState.posts}/>}/>
                        <Route path='dialogs'
                               element={<Dialogs
                                   dialogs={props.appState.dialogs}
                                   messages={props.appState.messages}/>}/>
                        <Route path='news' element={<News />}/>
                        <Route path='music' element={<Music />}/>
                        <Route path='settings' element={<Settings />}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;




