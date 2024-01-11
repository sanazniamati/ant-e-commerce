/** @format */
"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/api/categoris";
import { Badge, Button, Card, Image, List, Rate, Typography } from "antd";
import styles from "../../app/page.module.css";

function Products(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
    });
  }, []);
  return (
    <List
      grid={{ column: 3 }}
      renderItem={(product, index) => {
        return (
          <Badge.Ribbon
            className={styles.itemCardBadge}
            text={product.discountPercentage}
            color={"pink"}
          >
            <Card
              className={styles.itemCard}
              key={product.id}
              title={product.title}
              cover={
                <Image
                  className={styles.itemCardImage}
                  src={product.thumbnail}
                  alt=""
                />
              }
              actions={[
                <Rate
                  key={product.index}
                  allowHalf
                  disabled
                  value={product.rating}
                />,
                <AddToCartButton key={product.index} />,
              ]}
            >
              <Card.Meta
                title={
                  <Typography.Paragraph>
                    Price :${product.price}{" "}
                    <Typography.Text delete type="danger">
                      {parseFloat(
                        product.price +
                          (product.price * product.discountPercentage) / 100,
                      ).toFixed(2)}
                    </Typography.Text>
                  </Typography.Paragraph>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                  >
                    {product.description}
                  </Typography.Paragraph>
                }
              ></Card.Meta>
            </Card>
          </Badge.Ribbon>
        );
      }}
      dataSource={items}
    ></List>
  );
  function AddToCartButton() {
    const addProductToCart = () => {};
    return (
      <Button type="link" onClick={addProductToCart}>
        Add to Cart
      </Button>
    );
  }
}

export default Products;
