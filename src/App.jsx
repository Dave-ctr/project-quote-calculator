import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { initialQuoteArray } from "./quoteData.js";
import Home from "./pages/Home.jsx";
import QuoteFormPage from "./pages/QuoteFormPage.jsx";
import MainLayout from "./Layout/MainLayout.jsx";

function App() {
  const [quote, setQuote] = useState(initialQuoteArray);
  const [sliderValue, setSliderValue] = useState(
    initialQuoteArray.startingValue
  );
  const [selectionValue, setSelectionValue] = useState('');

  const headerReference = useRef(null);



  const handleUpdateSelectionValue = (event, currentSliderValue) => {
      const value = event.target.value;
      setSliderValue(value)
      console.log(`Slider value = ${value}`);
  
    if(headerReference.current) {
        const quoteName = headerReference.current.innerText;
        console.log("The slider title: ", quoteName);
        console.log("The slider value: ", currentSliderValue)
        // Later on the if statement will be using 
        // the quoteName and the currentSliderValue to update the state of selectionValue
        // if(
        //     quoteName === "NUMBER OF PAGES" && 
        //     (currentSliderValue > 25 && currentSliderValue <= 50) 
        // ) {
        //     console.log("IN IF STATEMENT")
        //     setSelectionValue("50-150")
        // }
    }
}

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              children={
                <Home
                  quote={quote}
                  handleUpdateSelectionValue={handleUpdateSelectionValue}
                  sliderValue={sliderValue}
                  selectionValue={selectionValue}
                />
              }
            />
          }
        />
        <Route
          path="/register"
          element={<MainLayout children={<QuoteFormPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
