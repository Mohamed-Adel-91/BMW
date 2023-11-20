import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import Header from './Components/Header/Header.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)

// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import './index.css'
// import "bootstrap/dist/css/bootstrap.css"
// import Header from './Components/Header/Header.tsx'



// ReactDOM.render(
//   <Router>
//     <Header />
//     <App />
//   </Router>,
//   document.getElementById('root')
// );