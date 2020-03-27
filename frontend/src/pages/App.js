import React from 'react';
import './App.css'
import logo from '../assets/logo.svg'
import buscar from '../assets/search.svg'
function App() {
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"></link>
      <img src={logo} alt="logo" id="logo"/>
      <section>
        <input placeholder="Nome da doença ..."></input>
        <button><img src={buscar} alt="buscar"/></button>
      </section>
      
    </div>
  );
}

export default App;
