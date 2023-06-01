import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './app.css';

import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

import ImageOne from './Images/ImageOne';
import ImageTwo from './Images/ImageTwo';
import ImageThree from './Images/ImageThree';
import ImageFour from './Images/ImageFour';

export default function App() {
  return(
    <div className={styles.container}>
      <div className={styles.App}>
        <Router>
          <Header />
          <ImageOne />
          <AboutMe />
          <ImageTwo />
          <Projects />
          <ImageThree />
          <TechStack />
          <ImageFour />
          <ContactMe />
        </Router>
      </div>
    </div>
  );
}

// FOR NEXT COMMIT: FORMAT INTO GRID
