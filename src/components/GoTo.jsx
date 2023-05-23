import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward.js";
import { useTranslation } from "react-i18next"; // Import CSS file for animations

const GoTo = ({ from, to, deg }) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Link
        to={from === "home" ? "/" : `/${from}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Button
          variant="text"
          endIcon={
            <ArrowForwardIcon
              sx={{
                transform: `rotate(${deg})`,
              }}
            />
          }
          style={{
            fontFamily: "inherit",
            color: "inherit",
            fontWeight: "inherit",
          }}
        >
          {t(from)}
        </Button>
      </Link>
      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center", // Add this line to center the arrow
        }}
      >
        <Link
          to={to === "home" ? "/" : `/${to}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            style={{
              fontFamily: "inherit",
              color: "inherit",
              fontWeight: "inherit",
            }}
          >
            {t(to)}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default GoTo;
