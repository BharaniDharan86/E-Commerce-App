export default async function getAllProducts() {
  const response = await fetch("https://course-api.com/react-store-products");
  const data = await response.json();
  return data;
}

export async function getSingleProduct(id) {
  console.log(id);
  const response = await fetch(
    `https://course-api.com/react-store-single-product?id=${id}`
  );
  const data = await response.json();
  return data;
}
