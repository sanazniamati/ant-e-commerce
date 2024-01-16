/** @format */

"use client";

import { Card, List, Image, Typography, Flex, Badge } from "antd";
const { Text, Paragraph } = Typography;
import { getProductsByCategory } from "../../api/route";

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
                  key={index}
                  cover={
                    <Image
                      src={product.thumbnail}
                      className={styles.itemCardImg}
                      alt=""
                    />
                  }
                >
                  <Card.Meta
                    title={
                      <Paragraph>
                        <Flex gap="small">
                          <Text>Price: ${product.price}</Text>
                          <Text delete type="danger">
                            $
                            {parseFloat(
                              product.price +
                                (product.price * product.discountPercentage) /
                                  100,
                            ).toFixed(2)}
                          </Text>
                        </Flex>
                      </Paragraph>
                    }
                    description={product.description}
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
