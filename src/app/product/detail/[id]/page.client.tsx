'use client';
// Version client (pour info)

import { fetchProductById } from '@/services/product.service';
import { Product } from '@/types/product';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductDetailPage() {

    const { id } = useParams<{ id: string; }>();
    const productId = parseInt(id);

    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>();

    useEffect(() => {
        setLoading(true);
        fetchProductById(productId)
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (isLoading) { return <h1 className='text-5xl mb-5'>Loading...</h1> }

    if (!product) { notFound(); }

    return (
        <>
            <h1 className='text-5xl mb-5'>Detail d'un produit...</h1>
            <p>{product.label} • {product.marque}</p>
        </>
    );
}