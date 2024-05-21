import React from "react";
import { Link } from "react-router-dom";

function QuoteFormPage({ quoteListItems, selectionValues, headerRefs }) {
  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  return (
    <div>
      QuoteFormPage
      <Link to="/">
        <button>Back to Quote</button>
      </Link>
      <h3>Quote Details</h3>
      <ul>
        {quoteListItems.map((quoteItem, index) => (
          <li key={index}>
            <h6 ref={headerRefs.current[index]} style={{ fontSize: "1rem" }}>
              {quoteItem.quoteName.toUpperCase()}
            </h6>
            {selectionValues[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteFormPage;
