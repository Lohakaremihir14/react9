import React, { useEffect, useState } from 'react'
import './App.css'
function App ()
{
  const [quote,setQuote]=useState({})
  useEffect(function ()
  {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data)=>setQuote(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <h2>{quote.quote}</h2>
      <p>{quote.author}</p>
    </div>
  )
}

export default App
