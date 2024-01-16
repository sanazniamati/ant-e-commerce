/** @format */

export const getProductsByCategory = async (slug) => {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    cache: "no-store",
  });

  console.log("zozo", res);
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

export const addToCart = (id) => {
  fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    }),
  }).then((res) => res.json());
  // .then(console.log);
};
