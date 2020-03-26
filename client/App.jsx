import React from 'react'
import MainRouter from './MainRouter.jsx'
import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import MenuBar from './core/menu-bar.jsx';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <MenuBar></MenuBar>
            <MainRouter/>
        </BrowserRouter>
    </ThemeProvider>
)

export default hot(module)(App)