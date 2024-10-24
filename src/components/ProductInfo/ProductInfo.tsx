import { Product } from '@/types/product';


type ProductInfoProps = Product & {
    quantity?: number
};

export default function ProductInfo({ label, marque, price, quantity } : ProductInfoProps) {

    return (
        <div className='shadow-md flex flex-col gap-1 p-2'>
            <p className='text-xl'>{label} {marque}</p>
            <p>{price.toLocaleString(undefined, { style: 'currency', currency: 'EUR' })}</p>
            {quantity !== undefined && (
                <p>Quantité : {quantity}</p>
            )}
        </div>
    )
}