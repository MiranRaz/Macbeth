import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./About.css";
import { useSelector } from "react-redux";
import LightTheme from "../../theme/LightTheme.js";
import { createTheme } from "@mui/material/styles";
import DarkTheme from "../../theme/DarkTheme.js";
import { useTranslation } from "react-i18next";
import macbeth_skend from "../../assets/macbeth_skend.jpg";
import bandMembers from "./bandMembers.js";
import { Grid } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const component = useRef();
  const slider = useRef();
  // theme
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  // translation
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current?.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div
      ref={component}
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <div className="firstContainer">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              color: theme.palette.primary.text,
            }}
          >
            {t("about_desc")}
          </Grid>
        </Grid>
      </div>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          height: "300px", // Set the desired height for the cropped image
        }}
      >
        <img
          src={macbeth_skend}
          alt="{alt}"
          draggable={false}
          style={{
            width: "80%",
            marginTop: "-20%",
            marginBottom: "-10%",
            zIndex: 12,
          }}
        />
      </Grid>
      <div ref={slider} className="container">
        {bandMembers.map((member) => (
          <div key={member?.id} className="panel">
            <img
              key={member?.id}
              src={member?.image}
              alt={""}
              draggable={false}
              style={{
                height: "433px",
                width: "349px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
