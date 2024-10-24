import ProductInfo from '@/components/ProductInfo/ProductInfo';
import { fetchProductsWithLowerStock } from '@/services/product.service';


export default async function ProductLowerStock() {

    const lowerStockProducts = await fetchProductsWithLowerStock();

    if (lowerStockProducts.products.length === 0) {
        return <p>Aucun produit</p>;
    }

    return lowerStockProducts.products.map(product => (
        <ProductInfo key={product.id} {...product} quantity={lowerStockProducts.quantity} />
    ));
}