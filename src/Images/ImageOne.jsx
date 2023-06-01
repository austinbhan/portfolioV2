import styles from '../app.css';

export default function ImageOne() {
  return (
    <div className={styles.gridTwo}>
      <img 
        className={styles.image}
        src={require('../Assets/butterfly.jpg')} />
    </div>
  );
}
