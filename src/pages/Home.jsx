import React from "react";
import QuoteItem from "../components/QuoteItem";
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
        font-weight: 400;
        font-style: normal;
      }
      body, button {
        font-family: 'Montserrat', sans-serif;
      }
    `}
  />
);

const Heading = styled("h1")({
  fontFamily: "Recoleta, sans-serif",
  fontSize: "3rem",
  fontWeight: "bolder",
  textAlign: "center",
  paddingTop: "25px",
});

function Home({
  quoteListItems,
  handleUpdateSelectionValue,
  sliderValues,
  selectionValues,
  headerRefs,
  calculateTotalCost,
}) {
  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  return (
    <div
      className="quoteItemContainer"
      style={{
        backgroundColor: " #0e2949",
        color: "white",
        padding: "0px 25px",
        paddingBottom: "25px",
        borderRadius: "10px",
      }}
    >
      <GlobalStyles />
      <Heading>Project Quote Calculator</Heading>
      <p style={{ textAlign: "center", margin: "25px", fontSize: "1.25rem" }}>
        Use the sliders below to indicate your needs, then click the "See
        Pricing" button for a free, instant quote.
      </p>
      <ul className="quoteForm" style={{ listStyle: "none", display: "grid" }}>
        {quoteListItems.map((quoteItem, index) => (
          <QuoteItem
            key={index}
            quoteItem={quoteItem}
            handleUpdateSelectionValue={(event, sliderValue) =>
              handleUpdateSelectionValue(event, sliderValue, index)
            }
            itemSliderValue={sliderValues[index]}
            selectionValue={selectionValues[index]}
            headerReference={headerRefs.current[index]}
          />
        ))}
      </ul>
      <div style={{ margin: "25px auto", width: "fit-content" }}>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button
            onClick={() => calculateTotalCost(selectionValues)}
            style={{
              border: "none",
              padding: "5px 25px",
              fontSize: "1.5rem",
              borderRadius: "10px",
              backgroundColor: "#ff2d65",
              cursor: "pointer",
              transition: "background-color 0.5s ease, color 0.5s ease",
            }}
            onMouseEnter={(e) => (
              (e.target.style.backgroundColor = "#41426d"),
              (e.target.style.color = "white")
            )}
            onMouseLeave={(e) => (
              (e.target.style.backgroundColor = "#ff2d65"),
              (e.target.style.color = "black")
            )}
          >
            See Pricing
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
