import React from "react"
import './App.css'
import data from "../data"
//import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
    const cards = data.map(item =>
      <Card 
        key = {item.id }
        {...item}  
      />)       
  return(
    <div className="App">
      {/* <Navbar/> */}
      <section className="cards-list">
        {cards}
      </section>
    
  </div>
)


}

export default App
