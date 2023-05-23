import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faDeezer } from "@fortawesome/free-brands-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const ListenToSong = ({ pickedAlbum }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {pickedAlbum[0]?.songs?.map((item, index) => {
        const lines = pickedAlbum[0]?.tekst[index]?.split(",");
        return (
          <Accordion
            key={item}
            expanded={expanded === item}
            onChange={handleChange(item)}
            sx={{
              backgroundColor: "inherit",
              borderBottom: `3px dotted white`,
              boxShadow: "0",
            }}
          >
            <AccordionSummary>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Grid>
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      color: "white",
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    {expanded === item ? (
                      <Grid sx={{ display: "flex", flexDirection: "row" }}>
                        <YouTubeIcon
                          sx={{ pr: "5px" }}
                          onClick={() => {
                            window.location.href = `https://www.youtube.com/watch?v=${pickedAlbum[0]?.ytLinks[index]}`;
                          }}
                        />
                        <div
                          onClick={() => {
                            window.location.href = pickedAlbum[0]?.albumLink;
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faApple}
                            style={{ paddingRight: 7, fontSize: "19px" }}
                          />
                          <FontAwesomeIcon
                            icon={faSpotify}
                            style={{ paddingRight: 7, fontSize: "19px" }}
                          />
                          <FontAwesomeIcon
                            icon={faDeezer}
                            style={{ paddingRight: 7, fontSize: "19px" }}
                          />
                          <FontAwesomeIcon
                            icon={faAmazon}
                            style={{ paddingRight: 7, fontSize: "19px" }}
                          />
                        </div>
                      </Grid>
                    ) : (
                      ""
                    )}
                  </Typography>
                </Grid>
                <Grid sx={{ color: "white" }}>{item}</Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: {
                    xs: "column-reverse",
                    md: "row",
                  },
                }}
              >
                <Grid>
                  {lines?.map((line, lineIndex) => (
                    <Typography
                      key={lineIndex}
                      sx={{
                        color: "white",
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Grid>
                <Grid sx={{ width: { xs: "100%", md: "50%" } }}>
                  <iframe
                    style={{
                      border: 0,
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${pickedAlbum[0]?.ytLinks[index]}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                  <iframe
                    style={{
                      border: 0,
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    src={`https://open.spotify.com/embed/track/${pickedAlbum[0]?.spLinks[index]}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default ListenToSong;
