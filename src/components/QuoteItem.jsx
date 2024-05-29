import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CustomArrowIcon = () => {
  return <ArrowDropDownIcon style={{ color: "white" }} />;
};

const StyledMenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#0e2949",
      color: "white",
      borderRadius: "10px",
    },
  },
};

function QuoteItem({
  quoteItem,
  handleUpdateSelectionValue,
  itemSliderValue,
  selectionValue,
  headerReference,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handleSelectChange = (event) => {
    handleUpdateSelectionValue(event, event.target.value, quoteItem.index);
  };

  return (
    <>
      <li style={{ display: "flex", alignItems: "center" }}>
        <h6
          ref={headerReference}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {quoteItem.quoteName.toUpperCase()}
        </h6>
      </li>
      {window.innerWidth >= 769 ? (
        <>
          <li>
            {quoteItem.quoteName.toUpperCase() === "PLATFORM" ? (
              <Select
                name="platformSelection"
                value={selectionValue}
                onChange={handleSelectChange}
                fullWidth
                IconComponent={CustomArrowIcon}
                sx={{
                  fontSize: "1rem",
                  color: "#1976D2",
                  backgroundColor: "#1976D2",
                  borderRadius: "10px",
                  height: 16,
                  "& .MuiSelect-select": {
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                }}
                MenuProps={StyledMenuProps}
              >
                <MenuItem value="Custom">Custom</MenuItem>
                <MenuItem value="Shopify">Shopify</MenuItem>
                <MenuItem value="Webflow">Webflow</MenuItem>
                <MenuItem value="Wix">Wix</MenuItem>
                <MenuItem value="Rocketspark">Rocketspark</MenuItem>
                <MenuItem value="Squarespace">Squarespace</MenuItem>
                <MenuItem value="Wordpress">Wordpress</MenuItem>
                <MenuItem value="Woocommerce">Woocommerce</MenuItem>
              </Select>
            ) : (
              <Slider
                onChange={(event, sliderValue) => {
                  if (sliderValue >= quoteItem.startingValue) {
                    handleUpdateSelectionValue(event, sliderValue);
                  }
                }}
                value={itemSliderValue}
                defaultValue={quoteItem.startingValue}
                min={0}
                step={quoteItem.steps}
                aria-label="Default"
                valueLabelDisplay="auto"
                sx={{
                  "& .MuiSlider-thumb": {
                    display: "none",
                  },
                  "& .MuiSlider-track": {
                    height: 16,
                    display: itemSliderValue === 0 ? "none" : "block",
                  },
                  "& .MuiSlider-rail": {
                    height: 16,
                    color: "white",
                  },
                }}
              />
            )}
          </li>
          <li
            className="quoteSelectionValue"
            style={{
              backgroundColor: "white",
              color: "#0e2949",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bolder",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{selectionValue}</p>
          </li>
        </>
      ) : (
        <>
          <li
            className="quoteSelectionValue"
            style={{
              backgroundColor: "white",
              color: "#0e2949",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bolder",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{selectionValue}</p>
          </li>
          <li>
            {quoteItem.quoteName.toUpperCase() === "PLATFORM" ? (
              <Select
                name="platformSelection"
                value={selectionValue}
                onChange={handleSelectChange}
                fullWidth
                IconComponent={CustomArrowIcon}
                sx={{
                  fontSize: "1rem",
                  color: "#1976D2",
                  backgroundColor: "#1976D2",
                  borderRadius: "10px",
                  height: 16,
                  "& .MuiSelect-select": {
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                }}
                MenuProps={StyledMenuProps}
              >
                <MenuItem value="Custom">Custom</MenuItem>
                <MenuItem value="Shopify">Shopify</MenuItem>
                <MenuItem value="Webflow">Webflow</MenuItem>
                <MenuItem value="Wix">Wix</MenuItem>
                <MenuItem value="Rocketspark">Rocketspark</MenuItem>
                <MenuItem value="Squarespace">Squarespace</MenuItem>
                <MenuItem value="Wordpress">Wordpress</MenuItem>
                <MenuItem value="Woocommerce">Woocommerce</MenuItem>
              </Select>
            ) : (
              <Slider
                onChange={(event, sliderValue) => {
                  if (sliderValue >= quoteItem.startingValue) {
                    handleUpdateSelectionValue(event, sliderValue);
                  }
                }}
                value={itemSliderValue}
                defaultValue={quoteItem.startingValue}
                min={0}
                step={quoteItem.steps}
                aria-label="Default"
                valueLabelDisplay="auto"
                sx={{
                  "& .MuiSlider-thumb": {
                    display: "none",
                  },
                  "& .MuiSlider-track": {
                    height: 16,
                    display: itemSliderValue === 0 ? "none" : "block",
                  },
                  "& .MuiSlider-rail": {
                    height: 16,
                    color: "white",
                  },
                }}
              />
            )}
          </li>
        </>
      )}
    </>
  );
}

export default QuoteItem;
