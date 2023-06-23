import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import 
// { BrowserRouter as Router,
//    Route,
//    Route,} 
//    from 'react-router-dom';
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from'react-top-loading-bar'


const App = () =>{
 const pageSize = 5;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  
    return (
     
        <>
          <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='red'
        progress={progress}
   
      />
          <Routes>
         
          
          <Route exect path="/" element={<News  apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="General" /> } />

          <Route exect path="/business" element={<News  apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="Business" /> } />
     
          <Route exect path="/entertainment" element={<News  apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="Entertainment" /> } />

          
          <Route exect path="/general" element={<News  apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="General" /> } />
          
          <Route exect path="/health" element={<News  apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="Health" /> } />
          
          <Route exect path="/science" element={<News  apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="Science" /> } />
          
          <Route exect path="/sports" element={<News  apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="Sports" /> } />


          <Route exect path="/technology" element={<News  apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="Technology" /> } />
          </Routes>
          </Router>
      </>
  

    )
  
}
export default App;