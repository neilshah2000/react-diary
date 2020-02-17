import React from 'react'
// import { render } from 'react-dom'
// import HelloWorld from './HelloWorld.jsx'


// render(<HelloWorld/>, document.getElementById('root'))


import { hydrate } from 'react-dom'
import App from './App.jsx'

hydrate(<App/>, document.getElementById('root'));


