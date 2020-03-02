import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home.jsx'
import Journal2 from './core/Journal.jsx'
import JournalList from './core/JournalList.jsx'
class MainRouter extends Component {
    render() {
        return (<div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/journal" component={JournalList}/>
            <Route exact path="/journal/:journalId" component={Journal2}/>
        </Switch>
        </div>)
    }
}
export default MainRouter