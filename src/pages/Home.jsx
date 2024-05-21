import React from "react";
import QuoteItem from "../components/QuoteItem";
import { Link } from "react-router-dom";

function Home({ quote, handleUpdateSelectionValue, sliderValue,selectionValue, headerRefs }) {

  headerRefs.current = quote.map((_, i) => headerRefs.current[i] ?? React.createRef());

  return (
    <>
      <h1>Project Quote Calculator</h1>
      <p>
        Use the sliders below to indicate your needs, then click the "See
        Pricing" button for a free, instant quote.
      </p>
      <ul>
        {quote.map((quoteItem, index) => (
          <QuoteItem
            key={index}
            quoteItem={quoteItem}
            handleUpdateSelectionValue={(event, currentSliderValue) => handleUpdateSelectionValue(event, currentSliderValue, index)}
            sliderValue={sliderValue}
            selectionValue={selectionValue}
            headerReference={headerRefs.current[index]}
          />
        ))}
      </ul>
      <Link to="/register">
        <button>See Pricing</button>
      </Link>
    </>
  );
}

export default Home;
