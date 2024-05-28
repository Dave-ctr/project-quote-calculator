import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { initialQuoteItemsArray } from "./quoteData.js";
import Home from "./pages/Home.jsx";
import QuoteFormPage from "./pages/QuoteFormPage.jsx";
import MainLayout from "./Layout/MainLayout.jsx";

function App() {
  const [quoteListItems, _setQuoteListItems] = useState(initialQuoteItemsArray);
  const [sliderValues, setSliderValues] = useState(
    initialQuoteItemsArray.map((item) => item.startingValue)
  );
  const [selectionValues, setSelectionValues] = useState(
    initialQuoteItemsArray.map((item) => item.selectionOne)
  );

  const [selectionValueOne, setSelectionValueOne] = useState("");
  const [selectionValueTwo, setSelectionValueTwo] = useState("");

  const headerRefs = useRef([]);

  const pageRanges = {
    "1 - 10": { min: 1, max: 10 },
    "10 - 50": { min: 10, max: 50 },
    "50 - 150": { min: 50, max: 150 },
    "150 - 250": { min: 150, max: 250 },
    "250+": { min: 250, max: 250 },
  };

  const handleUpdateSelectionValue = (_event, sliderValue, index) => {
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
        if (sliderValue === 0) {
          updatedSelectionValues[index] = quoteListItems[2].selectionOne;
        } else if (sliderValue === 100) {
          updatedSelectionValues[index] = quoteListItems[2].selectionTwo;
        }
      } else if (quoteName === "RESPONSIVE DESIGN") {
        if (sliderValue === 0) {
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
        updatedSelectionValues[index] = sliderValue;
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

  const calculateTotalCost = (selectionValues) => {
    const designCosts = {
      Simple: 1000,
      Moderate: 3000,
      "High End": 5000,
      "World Class": 10000,
    };

    const eCommerceCosts = {
      None: 0,
      Basic: 3000,
      Advanced: 6000,
      Enterprise: 10000,
    };

    const databaseCosts = {
      None: 0,
      Basic: 2000,
      Advanced: 5000,
      Enterprise: 10000,
    };

    const cmsCosts = {
      None: 0,
      Basic: 2000,
      Advanced: 4000,
      Enterprise: 8000,
    };

    const platformDiscounts = {
      Custom: 0,
      Shopify: 25,
      Webflow: 10,
      Wix: 30,
      Rocketspark: 30,
      Squarespace: 25,
      Wordpress: 25,
      Woocommerce: 25,
    };

    const selectedPagesRange = pageRanges[selectionValues[0]];
    const minPages = selectedPagesRange.min;
    const maxPages = selectedPagesRange.max;

    const baseCost = designCosts[selectionValues[1]];
    const pagesCostMin = minPages * 100;
    const pagesCostMax = maxPages * 100;
    const seoCostMin = selectionValues[2] === "Yes" ? minPages * 100 + 2000 : 0;
    const seoCostMax = selectionValues[2] === "Yes" ? maxPages * 100 + 2000 : 0;
    const responsiveDesignCost = selectionValues[3] === "Yes" ? 1500 : 0;
    const eCommerceCost = eCommerceCosts[selectionValues[4]];
    const databaseCost = databaseCosts[selectionValues[5]];
    const cmsCost = cmsCosts[selectionValues[6]];
    const platformDiscount = platformDiscounts[selectionValues[7]] / 100;

    const totalCostMinBeforeDiscount =
      baseCost +
      pagesCostMin +
      seoCostMin +
      responsiveDesignCost +
      eCommerceCost +
      databaseCost +
      cmsCost;
    const totalCostMaxBeforeDiscount =
      baseCost +
      pagesCostMax +
      seoCostMax +
      responsiveDesignCost +
      eCommerceCost +
      databaseCost +
      cmsCost;

    const totalCostMin = totalCostMinBeforeDiscount * (1 - platformDiscount);
    const totalCostMax = totalCostMaxBeforeDiscount * (1 - platformDiscount);

    if (selectionValues[0] === "250+") {
      let selectionValueOne = `$${Math.ceil(totalCostMin)}`;
      let selectionValueTwo = `Sky's The Limit Baby`;
      setSelectionValueOne(selectionValueOne);
      setSelectionValueTwo(selectionValueTwo);
    } else {
      let selectionValueOne = `$${Math.ceil(totalCostMin)}`;
      let selectionValueTwo = `$${Math.ceil(totalCostMax)}`;
      setSelectionValueOne(selectionValueOne);
      setSelectionValueTwo(selectionValueTwo);
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
                  calculateTotalCost={calculateTotalCost}
                />
              }
            />
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout
              children={
                <QuoteFormPage
                  quoteListItems={quoteListItems}
                  selectionValues={selectionValues}
                  headerRefs={headerRefs}
                  selectionValueOne={selectionValueOne}
                  selectionValueTwo={selectionValueTwo}
                />
              }
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
