import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
import macbeth_skend from "../../assets/macbeth_skend.jpg";
import bandMembers from "./bandMembers.js";
import { Grid } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const component = useRef();
  const slider = useRef();
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
    <div ref={component}>
      <Grid
        sx={{ display: "flex", justifyContent: "center", fontSize: "17px" }}
      >
        <div className="firstContainer">{t("about_desc")}</div>
      </Grid>
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
            objectFit: "contain",
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
                height: "500px",
                width: "349px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
