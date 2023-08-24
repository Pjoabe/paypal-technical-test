export async function getProducts() {
  const urlAPI = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055#options';
  const response = await fetch(urlAPI);
  const categoriesMLB = response.json();
  return categoriesMLB;
}

