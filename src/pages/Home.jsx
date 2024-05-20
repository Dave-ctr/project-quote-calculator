import React from "react";
import QuoteItem from "../components/QuoteItem";
import { Link } from "react-router-dom";

function Home({ quote, handleUpdateSelectionValue, sliderValue }) {
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
            handleUpdateSelectionValue={handleUpdateSelectionValue}
            sliderValue={sliderValue}
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
