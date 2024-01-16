/** @format */

// components
// import Content from "@/components/content/content";
import styles from "./page.module.css";
// import { useEffect, useState } from "react";

// const getProductsByCategories = async () => {
//   const responce = await fetch(`https://dummyjson.com/products/category/${slug}`, { cache: "no-store" });
//   console.log("succss to fatch :",responce)
//   if (!responce.ok) {
//     throw new Error("faild to featch products");
//   }
//   const data = await responce.json();
//   return data;
// };

export default async function Home() {
  // const products = await getProductsByCategories();
  // console.log("products :", products);

  return <div className={styles.container}></div>;
}
