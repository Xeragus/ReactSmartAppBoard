import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo);
library.add(faPlus);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ProjectBoard />
      </div>
    );
  }
}

export default App;
