//import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App=()=>{
  const apikey=process.env.REACT_APP_NEWS_APIKEY
  const pageSize=10
  const [progress,setprogress]=useState(0)
  
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route exact path="/"><News setprogress={setprogress} apikey={apikey}  key="general"pageSize={pageSize}country='in' category='general'/></Route>
          <Route exact  path="/business"><News setprogress={setprogress} apikey={apikey}  key="business"pageSize={pageSize}country='in' category='business'/></Route>
          <Route exact  path="/entertainment"><News setprogress={setprogress} apikey={apikey}  key="entertainment"pageSize={pageSize}country='in' category='entertainment'/></Route>
          <Route exact  path="/health"><News setprogress={setprogress} apikey={apikey}  key="health"pageSize={pageSize}country='in' category='health'/></Route>
          <Route exact  path="/sports"><News setprogress={setprogress} apikey={apikey}  key="sports"pageSize={pageSize}country='in' category='sports'/></Route>
          <Route exact  path="/science"><News setprogress={setprogress} apikey={apikey}  key="science"pageSize={pageSize}country='in' category='science'/></Route>
          <Route exact path="/technology"><News setprogress={setprogress} apikey={apikey}  key="technology"pageSize={pageSize}country='in' category='technology'/></Route>
        </Switch>
        </Router>
      </div>
    )
}
export default App


