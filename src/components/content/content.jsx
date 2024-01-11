/** @format */
import Link from "next/link";
import styles from "./content.module.css";

function content(props) {
  return (
    <div className={styles.container}>
      <h1> content</h1>
      <Link href={"/women"}> go to category</Link>
    </div>
  );
}

export default content;
