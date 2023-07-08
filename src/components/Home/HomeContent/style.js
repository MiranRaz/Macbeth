import { styled } from "@mui/material/styles";
import { Grid, Typography, Button } from "@mui/material";

const GridWrapper = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
}));
const GridCardBack = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  justifyContent: "space-evenly",
  textTransform: "uppercase",
  fontFamily: "inherit",
}));
const TypographyCenter = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
}));
const StreamButton = styled(Button)(() => ({
  fontFamily: "inherit",
  fontWeight: "inherit",
}));

export { GridWrapper, GridCardBack, TypographyCenter, StreamButton };
