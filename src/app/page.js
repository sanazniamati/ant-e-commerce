/** @format */

// components
import Header from "@/components/header/Header";
import Content from "@/components/content/content";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
