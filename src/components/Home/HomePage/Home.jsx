import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// assets
import macbeth_home from '../../../assets/macbeth_home.jpg';
import macbeth_text from '../../../assets/macbeth_text.png';
import macbeth_text_light from '../../../assets/macbeth_text_light.png';
// components
import HomeContent from '../HomeContent/HomeContent.jsx';
// styling
import { GridWrapper, GridHomeImage, GridLogoText } from './style.js';
import './Home.css';

const Home = () => {
  const [showImage, setShowImage] = useState(false); // Set initial state to false
  const themeMode = useSelector((state) => state.theme.themeMode);

  useEffect(() => {
    const initialLoad = localStorage.getItem('initialLoad'); // Check if it's the initial page load

    if (!initialLoad) {
      // If it's the initial page load, delay the animation by 1 second
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 1000);
      // Set a flag in localStorage to indicate that the initial page load has occurred
      localStorage.setItem('initialLoad', 'true');
      return () => clearTimeout(timer);
    } else {
      // If it's not the initial page load, show the image immediately without animation
      setShowImage(true);
    }
  }, []);
  useEffect(() => {
    console.log('showImage:', showImage);
    console.log('themeMode:', themeMode);
    console.log('macbeth_text path:', macbeth_text);
  }, [showImage, themeMode]);
  return (
    <GridWrapper>
      <GridHomeImage container>
        <img
          className={'macbeth_home'}
          src={macbeth_home}
          alt="{alt}"
          draggable={false}
          style={{ opacity: showImage ? 1 : 0 }}
        />
      </GridHomeImage>
      <GridLogoText className={`transition-image ${showImage ? 'show' : ''}`}>
        <img
          className="logo"
          src={themeMode ? macbeth_text_light : macbeth_text}
          alt="{alt}"
          draggable={false}
          loading="lazy"
        />
      </GridLogoText>
      {/* Intersection observer implementation */}
      {/* <HomeContent /> */}
    </GridWrapper>
  );
};

export default Home;
