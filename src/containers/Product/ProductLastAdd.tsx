import ProductInfo from '@/components/ProductInfo/ProductInfo';
import { fetchLastProductAdded } from '@/services/product.service';


export default async function ProductLastAdd() {

    const lastProductAdded = await fetchLastProductAdded();

    return lastProductAdded ? (
        <ProductInfo {...lastProductAdded} />
    ) : (
        <p>Aucun produit</p>
    );
}