/** @format */

import { Menu } from "antd";
import { HomeFilled } from "@ant-design/icons";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.continer}>
      <Menu
        mode="horizontal"
        items={[
          {
            label: (
              <Link href="/">
                <HomeFilled />
              </Link>
            ),
            key: "home",
          },
          {
            label: "Men",
            key: "men",
            children: [
              {
                label: <Link href="/categories/mens-shirts">Mens Shirts</Link>,
                key: "mens-shirts",
              },
              {
                label: <Link href="/categories/mens-shoes">Mens Shoes</Link>,
                key: "mens-shoes",
              },
              {
                label: (
                  <Link href="/categories/mens-watches">Mens Watches</Link>
                ),
                key: "mens-watches",
              },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              {
                label: (
                  <Link href="/categories/womens-dresses">Womens Dresses</Link>
                ),
                key: "women-dresses",
              },
              {
                label: <Link href="/categories/women-shoes">Womens Shoes</Link>,
                key: "women-shoes",
              },
              {
                label: (
                  <Link href="/categories/women-watches">Womens Watches</Link>
                ),
                key: "women-watches",
              },
            ],
          },
          {
            label: <Link href="/categories/fragrences">Fragrences</Link>,
            key: "fragrences",
          },
        ]}
      />
    </div>
  );
};

export default Header;
