import { fetchProducts } from '@/services/product.service';
import Link from 'next/link';

export default async function ProductList() {

    const products = await fetchProducts();

    return (
        <section className='flex flex-col gap-2'>
            {products.map(({id, label, marque}) => (
                <article key={id} className='flex flex-row gap-2'>
                     <p>{label} {marque}</p>
                     <Link className='text-purple-400' href={'/product/detail/'+ id}>
                        Plus d'info...
                     </Link>
                </article>
            ))}
        </section>
    )
}