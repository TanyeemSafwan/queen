export async function getSomething() {
  const { data } = await useFetch('/api/products');
  return {
    data
  }
}