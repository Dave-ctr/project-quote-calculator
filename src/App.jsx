import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { initialQuoteItemsArray } from "./quoteData.js";
import Home from "./pages/Home.jsx";
import QuoteFormPage from "./pages/QuoteFormPage.jsx";
import MainLayout from "./Layout/MainLayout.jsx";

function App() {
  const [quoteListItems, setQuoteListItems] = useState(initialQuoteItemsArray);
  const [sliderValues, setSliderValues] = useState(
    initialQuoteItemsArray.map((item) => item.startingValue)
  );
  const [selectionValue, setSelectionValue] = useState("");

  const headerRefs = useRef([]);

  const handleUpdateSelectionValue = (event, sliderValue, index) => {
    
    const updatedSliderValues = [...sliderValues];
    updatedSliderValues[index] = sliderValue;
    setSliderValues(updatedSliderValues);

    const headerReference = headerRefs.current[index];
    
    if (headerReference) {
      const quoteName = headerReference.current.innerText;
      
      // console.log("Im in the headerReference if statement");
      // console.log("The slider title: ", quoteName);
      // console.log("The slider value: ", sliderValue);
      // console.log("headerReference = ", headerReference);

      // if (
      //   quoteName === "NUMBER OF PAGES" &&
      //   currentSliderValue > 25 &&
      //   currentSliderValue <= 50
      // ) {
      //   console.log("IN IF STATEMENT");
      //   setSelectionValue("50-150");
      // }
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              children={
                <Home
                  quoteListItems={quoteListItems}
                  handleUpdateSelectionValue={handleUpdateSelectionValue}
                  sliderValues={sliderValues}
                  selectionValue={selectionValue}
                  headerRefs={headerRefs}
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
