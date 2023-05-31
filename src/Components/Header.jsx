import styles from '../app.css';

export default function Header() {
  return (
    <div className={styles.headerPage}>
      <h1>Austin Han</h1>
      <h3>This is my title</h3>
      <p>Here is some more letters that will be a placeholder</p>
      <img
        className={styles.profilePicture} 
        src={require('../Assets/placeholder.jpg')} />
    </div>
  );
}
