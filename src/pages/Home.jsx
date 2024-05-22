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
        font-weight: 400; /* You can adjust the font-weight as needed */
        font-style: normal;
      }
      body {
        font-family: 'Montserrat', sans-serif; /* Apply Montserrat font to the body */
      }
    `}
  />
);

const Heading = styled("h1")({
  fontFamily: "Recoleta, sans-serif",
  fontWeight: "bolder",
  textAlign: "center",
});

function Home({
  quoteListItems,
  handleUpdateSelectionValue,
  sliderValues,
  selectionValues,
  headerRefs,
}) {
  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  return (
    <div
      style={{
        backgroundColor: " #0e2949",
        color: "white",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <GlobalStyles />
      <Heading>Project Quote Calculator</Heading>
      <p style={{ textAlign: "center" }}>
        Use the sliders below to indicate your needs, then click the "See
        Pricing" button for a free, instant quote.
      </p>
      <ul style={{ listStyle: "none" }}>
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
      <Link to="/register">
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <button style={{ margin: "" }}>See Pricing</button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
