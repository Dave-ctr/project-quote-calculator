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
    <div>
      <li>
        <Stack direction="row" spacing={2}>
          <h6 ref={headerReference} style={{ fontSize: "1rem" }}>
            {quoteItem.quoteName.toUpperCase()}
          </h6>
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
                height: 8,
              },
              "& .MuiSlider-rail": {
                height: 8,
                color: "white",
              },
            }}
          />
        </Stack>
        <p>{itemSliderValue}</p>
      </li>
    </div>
  );
}

export default QuoteItem;
