import React, { useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";
import { styled } from "@mui/system";
import axios from "axios";
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
  
  const [formData, setFormData] = useState({
    nameInput: "",
    emailInput: "",
    phoneNumberInput: "",
    companyInput: "",
    websiteInput: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      quoteDetails: quoteListItems.map((item, index) => ({
        quoteName: item.quoteName,
        selectionValue: selectionValues[index],
      })),
      quoteRange: `${selectionValueOne} - ${selectionValueTwo}`,
    };

    try {
      const response = await axios.post("http://localhost:5000/submit-form", dataToSubmit);
      if (response.status === 200) {
        setSubmissionStatus("Submission successful!");
      } else {
        setSubmissionStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("Submission failed. Please try again.");
    }
  };

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

        <form onSubmit={handleSubmit}>
          <div className="quoteFormList">
            <label htmlFor="nameInput">Name</label>
            <input type="text" required id="nameInput"   value={formData.name}
              onChange={(e) => handleChange(e)}/>
            <label htmlFor="emailInput">Email</label>
            <input type="email" required id="emailInput" value={formData.email}
              onChange={(e) => handleChange(e)}/>
            <label htmlFor="phoneNumberInput">
              Phone
              <br />
              Number
            </label>
            <input type="tel" required id="phoneNumberInput"    value={formData.phone}
           onChange={(e) => handleChange(e)}/>
            <label htmlFor="companyInput">Company</label>
            <input type="text" id="companyInput"   value={formData.company}
          onChange={(e) => handleChange(e)}/>
            <label htmlFor="websiteInput">Website</label>
            <input type="text" id="websiteInput"    value={formData.website}
        onChange={(e) => handleChange(e)}/>
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
   
        <div
          style={{
            margin: "0px auto",
            paddingBottom: "50px",
            width: "fit-content",
          }}
        >
      
            <button
              type='submit'
              style={{
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
       
        </div>
        </form>
        {submissionStatus && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            {submissionStatus}
          </p>
        )}
      </div>
    </>
  );
}

export default QuoteFormPage;
