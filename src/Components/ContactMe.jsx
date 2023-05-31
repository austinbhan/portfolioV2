import styles from '../app.css';

export default function ContactMe() {
  return (
    <div className={styles.contactMe}>
      <h1>Contact Me</h1>
      <h3>Here is my contact information</h3>
      <ul>
        <li>My LinkedIn</li>
        <li>My GitHub</li>
        <li>My Instagram</li>

      </ul>
    </div>
  );
}
