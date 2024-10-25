import ProductStockForm from '@/containers/Product/ProductStockForm';
import { fetchProductById } from '@/services/product.service';
import { notFound } from 'next/navigation';

type ProductDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {

    const productId = parseInt((await params).id);
    const product = await fetchProductById(productId);

    if (!product) {
        notFound();
    }

    return (
        <>
            <h1 className='text-5xl mb-5'>Detail d'un produit...</h1>
            <p>{product.label} • {product.marque}</p>
            <hr />
            <h2 className='text-3xl mt-2' >Gestion du stock</h2>
            <ProductStockForm productId={productId} />
        </>
    );
}