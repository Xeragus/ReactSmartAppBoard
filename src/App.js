import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddAppTaskForm from "./components/AppTask/AddAppTaskForm";
import { Provider } from 'react-redux';
import store from './store';

library.add(faIgloo);
library.add(faPlus);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <Navbar />
                  <Route exact path="/" component={ProjectBoard}/>
                  <Route exact path="/task/add" component={AddAppTaskForm}/>
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
