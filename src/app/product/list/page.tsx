import ProductList from '@/containers/Product/ProductList';
import { Suspense } from 'react';

export default async function ProductListPage() {

    return (
        <>
            <h1 className='text-5xl mb-5'>Liste des produits</h1>
            <Suspense fallback={<p>Chargement...</p>}>
                <ProductList />
            </Suspense>
        </>
    )
}