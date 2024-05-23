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
  fontSize: "3rem",
  fontWeight: "bolder",
  textAlign: "center",
  paddingTop: "25px",
});

function QuoteFormPage({
  quoteListItems,
  selectionValues,
  headerRefs,
  selectionValueOne,
  selectionValueTwo,
}) {
  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  const handleSubmit = () => {}

  return (
    <>
      <div
        className="quoteFormContainer"
        style={{
          backgroundColor: " #0e2949",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <GlobalStyles />
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Heading>Project Quote Calculator</Heading>
        </Link>

        <p style={{ textAlign: "center", margin: "25px", fontSize: "1.25rem" }}>
          We estimate your project will cost between{" "}
          {`${selectionValueOne} and ${selectionValueTwo}`}. Please complete the
          web form below for an exact project quote from a Take2 website design
          strategist.
        </p>

        <form action="http://www.activeCampaign.com">
          <div className="quoteFormList">
            <label htmlFor="nameInput">Name</label>
            <input type="text" required id="nameInput" />
            <label htmlFor="emailInput">Email</label>
            <input type="email" required id="emailInput" />
            <label htmlFor="phoneNumberInput">
              Phone
              <br />
              Number
            </label>
            <input type="tel" required id="phoneNumberInput" />
            <label htmlFor="companyInput">Company</label>
            <input type="text" id="companyInput" />
            <label htmlFor="websiteInput">Website</label>
            <input type="text" id="websiteInput" />
          </div>
          <div className="quoteDetailsList">
            <h3
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Quote
              <br />
              Details
            </h3>
            <ul
              style={{
                listStyle: "none",
                backgroundColor: "hsl(240, 100%, 10%)",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              {quoteListItems.map((quoteItem, index) => (
                <li key={index}>
                  <h6
                    ref={headerRefs.current[index]}
                    style={{ fontSize: "1rem" }}
                  >
                    {quoteItem.quoteName.toUpperCase()}:{" "}
                    {selectionValues[index]}
                  </h6>
                </li>
              ))}
              <li style={{ fontSize: "1rem", fontWeight: "bold" }}>
                QUOTE RANGE: {`${selectionValueOne} - ${selectionValueTwo}`}
              </li>
            </ul>
          </div>
        </form>
        <div
          style={{
            margin: "0px auto",
            paddingBottom: "50px",
            width: "fit-content",
          }}
        >
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button
              onClick={handleSubmit}
              style={{
                marginTop:'25px',
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
              Send me a proposal
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default QuoteFormPage;
