import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { initialQuoteArray } from './quoteData.js'
import Home from './pages/Home.jsx'
import QuoteFormPage from './pages/QuoteFormPage.jsx'

function App() {
 
  const [quote, setQuote] = useState(initialQuoteArray)
  const [sliderValue, setSliderValue] = useState(initialQuoteArray.startingValue)
  const handleUpdateSelectionValue = (event) => {
    const value = event.target.value;
    setSliderValue(value)
    console.log(`Slider value = ${value}`);
  }

  return (
    <>
<Routes>
  <Route path='/' element={<Home quote={quote} handleUpdateSelectionValue={handleUpdateSelectionValue} sliderValue={sliderValue}/>} />
  <Route path='/register' element={<QuoteFormPage />} />
</Routes>
    
    
    </>
  )
}

export default App
