import { useState, useEffect } from 'react'
import Card from "./components/Card";
import './App.css'

function App() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCard("")
        setCard(response);

        
      } catch (error) {
        console.log("No pudimos solicitar las tarjetas");
      }
      
    }
  fetchData();
   
  }, [])
  
  return (
    <>
      {
        card.map(card=><Card card={card}/>)
      }
    </>
  )
}

export default App;
