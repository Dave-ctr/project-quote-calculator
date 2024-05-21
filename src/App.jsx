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

      if (quoteName === "NUMBER OF PAGES" && sliderValue === 20) {
        setSelectionValue(quoteListItems[0].selectionOne);
      } else if (quoteName === "NUMBER OF PAGES" && sliderValue === 40) {
        setSelectionValue(quoteListItems[0].selectionTwo);
      } else if (quoteName === "NUMBER OF PAGES" && sliderValue === 60) {
        setSelectionValue(quoteListItems[0].selectionThree);
      } else if (quoteName === "NUMBER OF PAGES" && sliderValue === 80) {
        setSelectionValue(quoteListItems[0].selectionFour);
      } else if (quoteName === "NUMBER OF PAGES" && sliderValue === 100) {
        setSelectionValue(quoteListItems[0].selectionFive);
      } else if (quoteName === "STYLE OF DESIGN" && sliderValue === 25) {
        setSelectionValue(quoteListItems[1].selectionOne);
      } else if (quoteName === "STYLE OF DESIGN" && sliderValue === 50) {
        setSelectionValue(quoteListItems[1].selectionTwo);
      } else if (quoteName === "STYLE OF DESIGN" && sliderValue === 75) {
        setSelectionValue(quoteListItems[1].selectionThree);
      } else if (quoteName === "STYLE OF DESIGN" && sliderValue === 100) {
        setSelectionValue(quoteListItems[1].selectionFour);
      } else if (quoteName === "SEO INTEGRATION" && sliderValue === 50) {
        setSelectionValue(quoteListItems[2].selectionOne);
      } else if (quoteName === "SEO INTEGRATION" && sliderValue === 100) {
        setSelectionValue(quoteListItems[2].selectionTwo);
      } else if (quoteName === "RESPONSIVE DESIGN" && sliderValue === 50) {
        setSelectionValue(quoteListItems[3].selectionOne);
      } else if (quoteName === "RESPONSIVE DESIGN" && sliderValue === 100) {
        setSelectionValue(quoteListItems[3].selectionTwo);
      } else if (
        quoteName === "E-COMMERCE FUNCTIONALITY" &&
        sliderValue === 25
      ) {
        setSelectionValue(quoteListItems[4].selectionOne);
      } else if (
        quoteName === "E-COMMERCE FUNCTIONALITY" &&
        sliderValue === 50
      ) {
        setSelectionValue(quoteListItems[4].selectionTwo);
      } else if (
        quoteName === "E-COMMERCE FUNCTIONALITY" &&
        sliderValue === 75
      ) {
        setSelectionValue(quoteListItems[4].selectionThree);
      } else if (
        quoteName === "E-COMMERCE FUNCTIONALITY" &&
        sliderValue === 100
      ) {
        setSelectionValue(quoteListItems[4].selectionFour);
      } else if (quoteName === "DATABASE INTEGRATION" && sliderValue === 25) {
        setSelectionValue(quoteListItems[5].selectionOne);
      } else if (quoteName === "DATABASE INTEGRATION" && sliderValue === 50) {
        setSelectionValue(quoteListItems[5].selectionTwo);
      } else if (quoteName === "DATABASE INTEGRATION" && sliderValue === 75) {
        setSelectionValue(quoteListItems[5].selectionThree);
      } else if (quoteName === "DATABASE INTEGRATION" && sliderValue === 100) {
        setSelectionValue(quoteListItems[5].selectionFour);
      } else if (quoteName === "CMS INTEGRATION" && sliderValue === 25) {
        setSelectionValue(quoteListItems[6].selectionOne);
      } else if (quoteName === "CMS INTEGRATION" && sliderValue === 50) {
        setSelectionValue(quoteListItems[6].selectionTwo);
      } else if (quoteName === "CMS INTEGRATION" && sliderValue === 75) {
        setSelectionValue(quoteListItems[6].selectionThree);
      } else if (quoteName === "CMS INTEGRATION" && sliderValue === 100) {
        setSelectionValue(quoteListItems[6].selectionFour);
      } else if (quoteName === "PLATFORM" && sliderValue === 12.5) {
        setSelectionValue(quoteListItems[7].selectionOne);
      } else if (quoteName === "PLATFORM" && sliderValue === 25) {
        setSelectionValue(quoteListItems[7].selectionTwo);
      } else if (quoteName === "PLATFORM" && sliderValue === 37.5) {
        setSelectionValue(quoteListItems[7].selectionThree);
      } else if (quoteName === "PLATFORM" && sliderValue === 50) {
        setSelectionValue(quoteListItems[7].selectionFour);
      } else if (quoteName === "PLATFORM" && sliderValue === 62.5) {
        setSelectionValue(quoteListItems[7].selectionFive);
      } else if (quoteName === "PLATFORM" && sliderValue === 75) {
        setSelectionValue(quoteListItems[7].selectionSix);
      } else if (quoteName === "PLATFORM" && sliderValue === 87.5) {
        setSelectionValue(quoteListItems[7].selectionSeven);
      } else if (quoteName === "PLATFORM" && sliderValue === 100) {
        setSelectionValue(quoteListItems[7].selectionEight);
      }
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
