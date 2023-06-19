
import React from 'react';

import './App.css';
import Navbar1 from './components/Navbar1.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Todo from './components/Todo.jsx';
import All from './components/All.jsx';
import { BrowserRouter as Router,Link ,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Header/>
      <Content/>
      <Todo/>
      <All/>
      
    </div>
  );
}

export default App;
