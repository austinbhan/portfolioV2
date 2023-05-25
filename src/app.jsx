import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './app.css';

import Title from './Components/Title';

export default function App() {
  return(
    <div className={styles.App}>
      <Router>
        <Title />
        <h1>About Me</h1>
        <h1>Tech Stack</h1>
        <h1>Projects</h1>
        <h1>Contact Me</h1>
      </Router>
    </div>
  );
}
