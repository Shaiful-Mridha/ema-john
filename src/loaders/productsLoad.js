import { getShoppingCart } from "../utilities/fakedb";

const productsLoad = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
  console.log(products);

  const storedCart = getShoppingCart();
  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  //   if i need to send two things
  //   return [products,savedCart]
  //   another options
  //   return {products, cart: savedCart}

  return savedCart;
};
export default productsLoad;
