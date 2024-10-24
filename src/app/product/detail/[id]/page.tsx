import { fetchProductById } from '@/services/product.service';
import { notFound } from 'next/navigation';

type ProductDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {

    const productId = parseInt((await params).id);
    const product = await fetchProductById(productId);

    if(!product) {
        notFound();
    }

    return (
        <>
            <h1 className='text-5xl mb-5'>Detail d'un produit...</h1>
            <p>{product.label} • {product.marque}</p>
        </>
    );
}