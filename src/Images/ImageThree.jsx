import styles from '../app.css';

export default function ImageThree() {
  return (
    <div className={styles.gridSix}>
      <img 
        className={styles.image}
        src={require('../Assets/nap.jpg')} />
    </div>
  );
}
