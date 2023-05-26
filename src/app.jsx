import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './app.css';

import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

export default function App() {
  return(
    <div className={styles.App}>
      <Router>
        <Header />
        <AboutMe />
        <TechStack />
        <Projects />
        <ContactMe />
      </Router>
    </div>
  );
}
