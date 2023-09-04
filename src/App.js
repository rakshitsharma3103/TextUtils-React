// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {  
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not.  // this complete file is JS code but the code written in function App() is JSX(Html + JS)
  const [alert, setAlert] = useState(null);   //i have created alert as an object
  const [backgroundColor, setbackgroundColor] = useState('light');

  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }

  const toggleMode1 =()=> {
    if(backgroundColor==='light'){
      setbackgroundColor('green');
      document.body.style.backgroundColor = '#0d600d';
    }else {
      setbackgroundColor('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const toggleMode =()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils -Dark Mode';

      // setInterval(() => {                                   {/* to give a blinking msg on title */}
      //   document.title = 'TextUtils is Amazing';
      // },2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils -Light Mode';
    }
  }
  return (                                       //if i want to use "for" in this then we use htmlFor(prefer camel case) and className for class.  //here i can return only one div, but if i want to return multiple terms then simply i used <>..</> brackets in start and end, known as JSX Fragment :)
  <>
  {/* <Navbar title = "TextUtils" About ="About TextUtils" />             here we have done this because if we have to make another website then we just change the name and use this navbar, no need to make new one. */}
  <Router>
  <Navbar title='TextUtils' backgroundColor={backgroundColor} toggleMode1={toggleMode1} mode={mode} toggleMode={toggleMode}/>          {/*we can change mode like dark and light mode */}
  <Alert alert = {alert}/>
  <div className="container my-3">            {/* my-3 is used to put margin */}
    <Switch>
      <Route exact path="/about">
        <About mode={mode}/>
     </Route>
      <Route exact path="/">
      <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter" mode={mode}/>
      </Route>
    </Switch>
  </div>
  </Router>
  </>
  );
}

export default App;
