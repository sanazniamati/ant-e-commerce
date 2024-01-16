/** @format */

import { Button, Message } from "antd";
import { addToCart } from "../.././app/api/route";

export default function AddToCartButton({ item }) {
  const addProductToCart = () => {
    addToCart(item.id).then((res) => {
      Message.success(`${item.title}  has been added to cart `);
    });
  };
  return (
    <Button type="link" onClick={addProductToCart}>
      Add to Cart
    </Button>
  );
}
