export async function getProduct() {
  const url = `https://api.mercadolibre.com/items/MLA1376164717`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
}