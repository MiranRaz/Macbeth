import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.text,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  justifyContent: "flex-start",
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "openDrawer",
})(({ theme, openDrawer }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -240,
  ...(openDrawer && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));
const CustomButton = styled(Link)(({ isactive, theme }) => ({
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
    backgroundColor: `${theme.palette.primary.text}`,
    transition: "transform 0.4s ease-in-out, width 0.4s ease-in-out",
    transformOrigin: "left",
    transform: isactive === "true" ? "scaleX(1)" : "scaleX(0)",
    marginTop: "2px",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

export { DrawerHeader, Main, CustomButton };
