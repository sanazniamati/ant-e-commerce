/** @format */
"use client";
import React, { useState } from "react";
import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

function Header(props) {
  const router = useRouter();
  const handleOnMenuClick = (item) => {
    router.push(`/${item.key}`);
  };
  return (
    <div className={styles.header}>
      <Menu
        onClick={handleOnMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: "Men",
            key: "men",
            // children: [
            //   {
            //     label: "Men's Shirts",
            //     key: "mens-shirts",
            //   },
            //   {
            //     label: "Men's Shoes",
            //     key: "mens-shoes",
            //   },
            //   {
            //     label: "Men's Watches",
            //     key: "mens-watches",
            //   },
            // ],
          },
          {
            label: "Women",
            key: "women",
            // children: [
            //   {
            //     label: "Women's Dresses",
            //     key: "womens-dresses",
            //   },
            //   {
            //     label: "Women's Shoes",
            //     key: "womens-shoes",
            //   },
            //   {
            //     label: "Women's Watches",
            //     key: "womens-watches",
            //   },
            //   {
            //     label: "Women's Bags",
            //     key: "womens-bags",
            //   },
            //   {
            //     label: "Women's Jewellery",
            //     key: "womens-jewellery",
            //   },
            // ],
          },
          {
            label: "Fragrances",
            key: "fragrances",
          },
        ]}
      >
        Header
      </Menu>
    </div>
  );
}

export default Header;
