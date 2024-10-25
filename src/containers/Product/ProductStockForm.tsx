'use client';

import { addStockProduct } from '@/actions/product-stock.action';
import { useActionState } from 'react';

type ProductStockFormProps = {
    productId: number;
};

export default function ProductStockForm({ productId }: ProductStockFormProps) {
    
    // Il manque le productId dans l'action server, solution possible : 
    //  ( ) Ajouter un champs hidden avec la valeur
    //  ( ) Définir la valeur dans le state de l'action
    //  (X) Injecter la valeur dans la méthode à l'aide de la méthode "bind" 

    const addStockProductWithId = addStockProduct.bind(null, productId);
    const [state, formAction] = useActionState(addStockProductWithId, { message: null });
    
    return (
        <>
        <form action={formAction}>
            <label>
                Quantité :
                <input type="number" name="quantity" />
            </label>
            <button type="submit">
                Valider
            </button>
        </form>
        {state.message && (
            <p>{state.message}</p>
        )}
        </>
    );
}