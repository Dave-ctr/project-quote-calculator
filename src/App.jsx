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
  const [selectionValues, setSelectionValues] = useState(
    initialQuoteItemsArray.map((item) => item.selectionOne)
  );

  const headerRefs = useRef([]);

  const handleUpdateSelectionValue = (event, sliderValue, index) => {
    const updatedSliderValues = [...sliderValues];
    updatedSliderValues[index] = sliderValue;
    setSliderValues(updatedSliderValues);

    const headerReference = headerRefs.current[index];
    const quoteName = headerReference.current.innerText;

    let updatedSelectionValues = [...selectionValues];

    if (headerReference) {
      if (quoteName === "NUMBER OF PAGES") {
        if (sliderValue === 20) {
          updatedSelectionValues[index] = quoteListItems[index].selectionOne;
        } else if (sliderValue === 40) {
          updatedSelectionValues[index] = quoteListItems[index].selectionTwo;
        } else if (sliderValue === 60) {
          updatedSelectionValues[index] = quoteListItems[index].selectionThree;
        } else if (sliderValue === 80) {
          updatedSelectionValues[index] = quoteListItems[index].selectionFour;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[index].selectionFive;
        }
      } else if (quoteName === "STYLE OF DESIGN") {
        if (sliderValue === 25) {
          updatedSelectionValues[index] = quoteListItems[1].selectionOne;
        } else if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[1].selectionTwo;
        } else if (sliderValue === 75) {
          updatedSelectionValues[index] = quoteListItems[1].selectionThree;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[1].selectionFour;
        }
      } else if (quoteName === "SEO INTEGRATION") {
        if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[2].selectionOne;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[2].selectionTwo;
        }
      } else if (quoteName === "RESPONSIVE DESIGN") {
        if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[3].selectionOne;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[3].selectionTwo;
        }
      } else if (quoteName === "E-COMMERCE FUNCTIONALITY") {
        if (sliderValue === 25) {
          updatedSelectionValues[index] = quoteListItems[4].selectionOne;
        } else if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[4].selectionTwo;
        } else if (sliderValue === 75) {
          updatedSelectionValues[index] = quoteListItems[4].selectionThree;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[4].selectionFour;
        }
      } else if (quoteName === "DATABASE INTEGRATION") {
        if (sliderValue === 25) {
          updatedSelectionValues[index] = quoteListItems[5].selectionOne;
        } else if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[5].selectionTwo;
        } else if (sliderValue === 75) {
          updatedSelectionValues[index] = quoteListItems[5].selectionThree;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[5].selectionFour;
        }
      } else if (quoteName === "CMS INTEGRATION") {
        if (sliderValue === 25) {
          updatedSelectionValues[index] = quoteListItems[6].selectionOne;
        } else if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[6].selectionTwo;
        } else if (sliderValue === 75) {
          updatedSelectionValues[index] = quoteListItems[6].selectionThree;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[6].selectionFour;
        }
      } else if (quoteName === "PLATFORM") {
        if (sliderValue === 12.5) {
          updatedSelectionValues[index] = quoteListItems[7].selectionOne;
        } else if (sliderValue === 25) {
          updatedSelectionValues[index] = quoteListItems[7].selectionTwo;
        } else if (sliderValue === 37.5) {
          updatedSelectionValues[index] = quoteListItems[7].selectionThree;
        } else if (sliderValue === 50) {
          updatedSelectionValues[index] = quoteListItems[7].selectionFour;
        } else if (sliderValue === 62.5) {
          updatedSelectionValues[index] = quoteListItems[7].selectionFive;
        } else if (sliderValue === 75) {
          updatedSelectionValues[index] = quoteListItems[7].selectionSix;
        } else if (sliderValue === 87.5) {
          updatedSelectionValues[index] = quoteListItems[7].selectionSeven;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[7].selectionEight;
        }
      }

      setSelectionValues(updatedSelectionValues);
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
                  selectionValues={selectionValues}
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
