import React from "react";
import { Link } from "react-router-dom";

function QuoteFormPage({ quoteListItems, selectionValues, headerRefs, calculateTotalCost }) {
  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  return (
    <>
     <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
    <h1>Project Quote Calculator</h1>
    </Link>
    
    <div style={{
            display: 'flex',
            flexDirection: 'row',
            position: "absolute",
            bottom: '100px',
            alignItems: 'center'
         
            }}>

     

  
      <h3>Quote Details</h3>
      <ul style={{
          
           listStyle: "none",

        }}>
        {quoteListItems.map((quoteItem, index) => (
          <li key={index}>
            <h6 ref={headerRefs.current[index]} style={{    fontSize: "1rem" }}>
              {quoteItem.quoteName.toUpperCase()}: {selectionValues[index]}
            </h6>
            
          </li>
        ))}
      <li style={{    fontSize: "1rem", fontWeight: 'bold' }}>Quote Range: {calculateTotalCost(selectionValues)}</li>
      </ul>
    </div>
    </>
  );
}

export default QuoteFormPage;
