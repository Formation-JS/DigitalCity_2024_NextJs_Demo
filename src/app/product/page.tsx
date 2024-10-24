import ProductInfo from '@/components/ProductInfo/ProductInfo';
import { fetchLastProductAdded, fetchProductsWithLowerStock, fetchProductsWithHigherStock } from '@/services/product.service';

export default async function ProductPage() {

  //! Toutes les requetes (Sequentielle)
  // const lastProductAdded = await fetchLastProductAdded();
  // const lowerStockProducts = await fetchProductsWithLowerStock();
  // const higherStockProducts = await fetchProductsWithHigherStock();

  //! Toutes les requetes (Parallele)
  const [lastProductAdded, lowerStockProducts, higherStockProducts] = await Promise.all([
    fetchLastProductAdded(),
    fetchProductsWithLowerStock(),
    fetchProductsWithHigherStock()
  ])

  return (
    <div className='flex flex-col gap-3'>

      <h1 className='text-5xl mb-5'>Produit</h1>

      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl text-red-800'>Dernier produit ajouté</h2>
        {lastProductAdded ? (
          <ProductInfo {...lastProductAdded} />
        ) : (
          <p>Aucun produit</p>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl text-red-800'>Produit le plus en stock</h2>
        {higherStockProducts.products.map(product => (
          <ProductInfo key={product.id} {...product} quantity={higherStockProducts.quantity} />
        ))}
        {higherStockProducts.products.length === 0 && (
          <p>Aucun produit</p>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl text-red-800'>Produit le moins en stock</h2>
        {lowerStockProducts.products.map(product => (
          <ProductInfo key={product.id} {...product} quantity={lowerStockProducts.quantity} />
        ))}
        {lowerStockProducts.products.length === 0 && (
          <p>Aucun produit</p>
        )}
      </div>
    </div>
  );
}