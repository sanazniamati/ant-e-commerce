/** @format */

export const getAllProducts = async () => {
  return await fetch("https://dummyjson.com/products").then((res) =>
    res.json(),
  );
};

export const addToCart = (id) => {
  fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 50,
          quantity: 2,
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};
