import ProductInfo from '@/components/ProductInfo/ProductInfo';
import { fetchProductsWithHigherStock } from '@/services/product.service';


export default async function ProductHigherStock() {

    const higherStockProducts = await fetchProductsWithHigherStock();

    if (higherStockProducts.products.length === 0) {
        return <p>Aucun produit</p>;
    }

    return higherStockProducts.products.map(product => (
        <ProductInfo key={product.id} {...product} quantity={higherStockProducts.quantity} />
    ));
}