/** @format */

export const getProductsByCategory = async (slug) => {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    cache: "no-store",
  });

  console.log("zozo", res);
  if (!res.ok) throw new Error("Failed");
  return res.json();
};
