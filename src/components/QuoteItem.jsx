// import { useState } from "react";
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

function QuoteItem({quoteItem, handleUpdateSelectionValue, sliderValue}) {
  return (
    <div>
     <li>
        <Stack
          direction='row'
          spacing={2}
        >
          <h6>{quoteItem.quoteName.toUpperCase()}</h6>
          <Slider 
                onChange={handleUpdateSelectionValue}
                defaultValue={20} 
                step={30}
                aria-label="Default" 
                valueLabelDisplay="auto" 
                sx={{
                    '& .MuiSlider-thumb': {
                        display:'none',
                    },
                    '& .MuiSlider-track': {
                        height: 8, 
                      },
                      '& .MuiSlider-rail': {
                        height: 8,
                        color: 'white'
                      }
                }}
            />
        </Stack>
        <p>{sliderValue}</p>
     </li>
    </div>
  );
}

export default QuoteItem;
