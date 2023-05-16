import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const CustomButton = styled(Link)(({ isactive, theme }) => ({
  color: `${theme.palette.primary.text}`,
  display: "block",
  position: "relative",
  textDecoration: "none",
  userDrag: "none",
  userSelect: "none",
  MozUserSelect: "none",
  WebkitUserDrag: "none",
  WebkitUserSelect: "none",
  msUserSelect: "none",
  textTransform: "uppercase",
  transition: "all 1s ease-in-out",
  fontSize: "19px",
  "&::after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "1px",
    backgroundColor:
      isactive === "true" ? `${theme.palette.primary.text}` : "transparent",
    transition: "background-color 0.4s ease-in-out",
    marginTop: "2px",
  },
  "&:hover::after": {
    backgroundColor: `${theme.palette.primary.text}`,
  },
}));
