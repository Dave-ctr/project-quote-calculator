import Slider from "@mui/material/Slider";
import {useState, useEffect} from "react";

function QuoteItem({
  quoteItem,
  handleUpdateSelectionValue,
  itemSliderValue,
  selectionValue,
  headerReference,
}) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
}, [])

  return (
    <>
      <li style={{display:'flex', alignItems:'center', }}>
        <h6 ref={headerReference} style={{display:'flex', justifyContent:'flex-start', alignItems:'center', fontWeight:'bold'}}>
          {quoteItem.quoteName.toUpperCase()}
        </h6>
      </li>
      {window.innerWidth >= 769 ?
      <>
      <li>
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
              height: 16,display: itemSliderValue === 0 ? 'none' : 'block',
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
      :
      <>
      <li className='quoteSelectionValue' style={{backgroundColor:'white', color: '#0e2949', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bolder', borderRadius:'10px'}}>
        <p style={{fontWeight:'bold'}}>{selectionValue}</p>
      </li>
      <li>
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
              height: 16,display: itemSliderValue === 0 ? 'none' : 'block',
            },
            "& .MuiSlider-rail": {
              height: 16,
              color: "white",
            },
          }}
        />
      </li>

      </>
      }
    </>
  );
}

export default QuoteItem;
