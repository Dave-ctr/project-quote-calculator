import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Global } from "@emotion/react";
import { styled } from "@mui/system";
import axios from "axios";
import recoletaFont from "../assets/fonts/Recoleta-RegularDEMO.otf";
import montserratFont from "../assets/fonts/Montserrat-VariableFont_wght.ttf";
import SubmissionModal from "../components/Modal";
import { useNavigate } from "react-router-dom";

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
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px hsl(240, 100%, 10%) inset !important;
        -webkit-text-fill-color: white !important;
        font-family: 'Montserrat', sans-serif !important;
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
  const navigate = useNavigate();

  headerRefs.current = quoteListItems.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  const [formData, setFormData] = useState({
    nameInput: "",
    emailInput: "",
    phoneNumberInput: "",
    companyInput: "",
    websiteInput: "",
    additionalInfoInput: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [submissionModalMessage, setSubmissionModalMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmissionFormClose = () => {
    console.log("Submission modal closed");
    setSubmissionModalOpen(false);
    navigate("/");
  };

  const handleSubmissionFormOpen = (message) => {
    console.log("Submission modal open");
    setIsLoading(true);
    setSubmissionModalMessage(message);
    setSubmissionModalOpen(true);
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
      // Here before we make our request to the server (ours or a third party API)
      // We set the isLoading state to true
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5500/submit-form",
        dataToSubmit
      );
      if (response.status === 200) {
        setSubmissionStatus("Submission successful!");
        handleSubmissionFormOpen("Submission successful!");
        // handleOpen and pass in a success message
      } else {
        // Once we have a response from the server
        // We set the isLoading state to false
        // setIsLoading(false)
        setSubmissionStatus("Submission failed. Please try again.");
        handleSubmissionFormOpen("Submission failed. Please try again.");
        // handleOpen and pass in a failure message
      }
    } catch (error) {
      setSubmissionStatus("Submission failed. Please try again.");
      handleSubmissionFormOpen("Submission failed. Please try again.");
      // handleOpen and pass in a failure message
    } finally {
      // Normally you don't need this
      // We used a timer to simulate a loading state delay
      // const timerId = setTimeout(() => {
      //   setIsLoading(false)
      //   clearTimeout(timerId)
      // }, 5000)

      // Once we have a response from the server
      // We set the isLoading state to false
      // setIsLoading(false)
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
          }}
        >
          It is Loading
        </h1>
      ) : (
        <SubmissionModal
          open={submissionModalOpen}
          submissionModalMessage={submissionModalMessage}
          handleSubmissionFormClose={handleSubmissionFormClose}
        />
      )}
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
            <label htmlFor="nameInput"><span>Name<span style={{ color: 'red', paddingLeft: '10px',verticalAlign: 'middle' }}>*</span></span></label>
            <input
              type="text"
              id="nameInput"
              required
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
  <label htmlFor="emailInput">
  <span>Email<span style={{ color: 'red', paddingLeft: '10px', verticalAlign: 'middle'  }}>*</span></span>
</label>
            <input
              type="email"
              id="emailInput"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="phoneNumberInput">
              Phone
              <br /><span>
              Number<span style={{ color: 'red', paddingLeft: '10px',verticalAlign: 'middle' }}>*</span></span>
            </label>
            <input
              type="tel"
              id="phoneNumberInput"
              required
              value={formData.phone}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="companyInput">Company</label>
            <input
              type="text"
              id="companyInput"
              value={formData.company}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="websiteInput">Website</label>
            <input
              type="text"
              id="websiteInput"
              value={formData.website}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="additionalInfoInput">
              Additional
              <br />
              Information
            </label>
            <input
              type="text"
              id="additionalInfoInput"
              value={formData.info}
              onChange={(e) => handleChange(e)}
            />
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
              type="submit"
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
              Send me a proposal
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuoteFormPage;
