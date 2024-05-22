import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

function QuoteItem({
  quoteItem,
  handleUpdateSelectionValue,
  itemSliderValue,
  selectionValue,
  headerReference,
}) {
  return (
    <>
      <li style={{display:'flex', alignItems:'center', }}>
        <h6 ref={headerReference} style={{display:'flex', justifyContent:'flex-start', alignItems:'center', fontWeight:'bold'}}>
          {quoteItem.quoteName.toUpperCase()}
        </h6>
      </li>
      <li>
        {" "}
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
            },
            "& .MuiSlider-rail": {
              height: 16,
              color: "white",
            },
          }}
        />
      </li>
      <li className='quoteSelectionValue' style={{backgroundColor:'white', color: '#0e2949', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bolder', borderRadius:'10px'}}>
        <p style={{fontWeight:'bold'}}>{selectionValue}</p>
      </li>
    </>
  );
}

export default QuoteItem;
