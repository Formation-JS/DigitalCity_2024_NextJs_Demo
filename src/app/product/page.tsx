import ProductInfo from '@/components/ProductInfo/ProductInfo';
import ProductInfoSkeleton from '@/components/ProductInfo/ProductInfoSkeleton';
import ProductHigherStock from '@/containers/Product/ProductHigherStock';
import ProductLastAdd from '@/containers/Product/ProductLastAdd';
import ProductLowerStock from '@/containers/Product/ProductLowerStock';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function ProductPage() {

  return (
    <div className='flex flex-col gap-3'>

      <h1 className='text-5xl mb-5'>Produit</h1>
      <Link className='bg-purple-200 w-fit px-2 py-1 rounded-xl text-red-800' href='/product/add'>Nouveau produit</Link>

      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl text-red-800'>Dernier produit ajouté</h2>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <ProductLastAdd />
        </Suspense>
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl text-red-800'>Produit le plus en stock</h2>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <ProductHigherStock />
        </Suspense>
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl text-red-800'>Produit le moins en stock</h2>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <ProductLowerStock />
        </Suspense>
      </div>
    </div>
  );
}