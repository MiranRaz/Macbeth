import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const GridWrapper = styled(Grid)(() => ({
  height: window.innerHeight,
  width: "100vw",
  transition: "all 0.3s ease-in-out",
  overflowY: "scroll",
  zIndex: 2,
  overflowX: "hidden", // Add overflow: hidden to hide overflowing content
}));
const GridHomeImage = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  overflow: "hidden",
  height: "369px", // Set the desired height for the cropped image
  marginTop: 33,
}));
const GridLogoText = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  zIndex: 1, // Ensure the lower image appears on top
  marginTop: "-6.7%", // Adjust the value to control the amount of vertical overlap
  marginRight: "-37%", // Adjust the value to control the amount of horizontal overlap
  overflow: "hidden",
}));
export { GridWrapper, GridHomeImage, GridLogoText };
