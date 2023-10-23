import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import About from "./About.js";
import TextForm from "./TextForm.js" ;
import React , {useState} from 'react'
import Box from "./Box.js" ;
import {
  BrowserRouter as Router,
  Switch as witch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  //setting alert function here
  const[alert,setalert]= useState(null);
  const showAlert=(message,type)=>{
    setalert({
      type:type,
      messg:message

    })
    setTimeout(()=>{
    setalert(null)
    },1000)
  }
  //VARIABLE for dark mode
 const[modes,setmode]=useState("light");
 const toggles=()=>{
  if(modes==='dark'){
    setmode("light");
    document.body.style.backgroundColor="white";
    showAlert("Your light mode is enabled","success")
  }
  else{
    setmode("dark");
    document.body.style.backgroundColor="black";
    showAlert("Your black mode is enabled","success")
  }
 }
  //All html tags are here
  return (
    
   <>

 <Router>  
<Navbar title="Textutils" info="some info" mode={modes} toggle={toggles}/>
<Box alert={alert} />
<div className="container">
< Routes>

          <Route  exact path="/about" element={<About mode={modes} />}/> 
 
          <Route  path='/' element={<TextForm  heading ="Your Personal Text Manipulator "showalert={showAlert}  mode={modes}/>}/>              
</Routes>
</div>
 </Router> 
  </>
  );
}

export default App
