import React from "react";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";
import { styled } from "@mui/system";
import recoletaFont from "../assets/fonts/Recoleta-RegularDEMO.otf";
import montserratFont from "../assets/fonts/Montserrat-VariableFont_wght.ttf";

const GlobalStyles = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Recoleta';
        src: url(${recoletaFont}) format('opentype');
      }
      @font-face {
        font-family: 'Montserrat';
        src: url(${montserratFont}) format('truetype');
        font-weight: 400; /* You can adjust the font-weight as needed */
        font-style: normal;
      }
      body, button {
        font-family: 'Montserrat', sans-serif; /* Apply Montserrat font to the body */
      }
    `}
  />
);

const Heading = styled("h1")({
  fontFamily: "Recoleta, sans-serif",
  fontSize:'3rem',
  fontWeight: "bolder",
  textAlign: "center",
});

function QuoteFormPage({ quoteListItems, selectionValues, headerRefs, selectionValueOne, selectionValueTwo }) {
  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  return (
    <>
     <div
    className="quoteItemContainer"
      style={{
        backgroundColor: " #0e2949",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <GlobalStyles />
     <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
      <Heading >Project Quote Calculator</Heading>
    </Link>
      
      <p style={{ textAlign: "center", margin:'25px', fontSize:'1.25rem'}}>
       We estimate your project will cost between {`${selectionValueOne} and ${selectionValueTwo}`}. Please complete the web form below for an exact project quote from a Take2 website design strategist.
      </p>

    
    <div 
    className="quoteDetailsList">
          
            <h3 style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            Quote 
            <br />
            Details
            </h3>
      <ul
      style={{
          listStyle: "none",
          backgroundColor: 'hsl(240, 100%, 10%)',
          padding:'20px',
          borderRadius: "10px",
        }}>
        {quoteListItems.map((quoteItem, index) => (
          <li key={index}>
            <h6 ref={headerRefs.current[index]} style={{    fontSize: "1rem" }}>
              {quoteItem.quoteName.toUpperCase()}: {selectionValues[index]}
            </h6>
            
          </li>
        ))}
      <li style={{    fontSize: "1rem", fontWeight: 'bold' }}>Quote Range: {`${selectionValueOne} - ${selectionValueTwo}`}</li>
      </ul>
    </div>
</div>
    </>
  );
}

export default QuoteFormPage;
