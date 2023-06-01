import styles from '../app.css';

export default function ImageTwo() {
  return (
    <div className={styles.gridFour}>
      <img 
        className={styles.image}
        src={require('../Assets/drink.jpg')} />
    </div>
  );
}
