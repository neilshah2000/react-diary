import React from 'react'
import MainRouter from './MainRouter.jsx'
import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import MenuBar from './core/menu-bar.jsx';


const App = () => (
    <BrowserRouter>
        <MenuBar></MenuBar>
        <MainRouter/>
    </BrowserRouter>
)

export default hot(module)(App)