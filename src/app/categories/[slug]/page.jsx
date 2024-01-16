/** @format */

"use client";

import { Card, List, Image, Typography, Flex, Badge, Rate } from "antd";
const { Text, Paragraph } = Typography;
import { getProductsByCategory } from "../../api/route";
import AddToCartButton from "../../../components/addToCartButton/AddToCartButton";

// styles
import styles from "./singleCategory.module.css";

//page to show item's of selected categories from Menu
const page = async ({ params }) => {
  const { slug } = params;
  console.log("slug :", slug);
  const records = await getProductsByCategory(slug);

  return (
    <div className={styles.container}>
      {records && (
        <List
          grid={{ column: 3 }}
          dataSource={records.products}
          renderItem={(product, index) => (
            <List.Item>
              <Badge.Ribbon
                className={styles.itemCardBadge}
                text={product.discountPercentage}
                color={"pink"}
              >
                <Card
                  title={product.title}
                  className={styles.itemCard}
                  key={index}
                  cover={
                    <Image
                      src={product.thumbnail}
                      className={styles.itemCardImg}
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
                    <AddToCartButton key={product.index} item={product} />,
                  ]}
                >
                  <Card.Meta
                    title={
                      <Typography.Paragraph>
                        Price :${product.price}{" "}
                        <Typography.Text delete type="danger">
                          {parseFloat(
                            product.price +
                              (product.price * product.discountPercentage) /
                                100,
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
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default page;
