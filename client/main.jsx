import React from 'react'
import regeneratorRuntime from "regenerator-runtime";
import { hydrate } from 'react-dom'
import App from './App.jsx'

hydrate(<App/>, document.getElementById('root'));


