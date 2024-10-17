import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import macbeth_skend from '../../assets/macbeth_skend.jpg';
import bandMembers from './bandMembers.js';
import { Grid } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const component = useRef();
  // translation
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  // Remove the useEffect for the slider

  return (
    <div
      ref={component}
      style={{
        height: '100vh',
      }}
    >
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', fontSize: '17px' }}
      >
        <div className="firstContainer">{t('about_desc')}</div>
      </Grid>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          height: '300px', // Set the desired height for the cropped image
        }}
      >
        <img
          src={macbeth_skend}
          alt="{alt}"
          draggable={false}
          style={{
            width: '80%',
            marginTop: '-20%',
            marginBottom: '-10%',
            objectFit: 'contain',
            zIndex: 12,
          }}
        />
      </Grid>
      {/* Slider section removed */}
    </div>
  );
};
export default About;
