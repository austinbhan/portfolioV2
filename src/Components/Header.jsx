import styles from '../app.css';

export default function Header() {
  return (
    <div className={styles.headerPage}>
      <div className={styles.headerElementOne}>
        <h1>Austin Han</h1>
        <h3>This is my title</h3>
      </div>
      <div className={styles.headerElementTwo}>
        <img
          className={styles.profilePicture} 
          src={require('../Assets/placeholder.jpg')} />
      </div>
    </div>
  );
}
