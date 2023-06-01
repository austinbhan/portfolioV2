import styles from '../app.css';

export default function ImageFour() {
  return (
    <div className={styles.gridEight}>
      <img 
        className={styles.image}
        src={require('../Assets/birthday.jpg')} />
    </div>
  );
}
