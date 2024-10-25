'use server';

// import { redirect } from 'next/navigation';

export type ProductStockFormState = {
    message: string | null;
};

export async function addStockProduct(
    productId: number, state: ProductStockFormState, formData: FormData
) : Promise<ProductStockFormState> {

    const quantity = parseInt(formData.get('quantity')?.toString() ?? 'N/A');

    if (isNaN(quantity)) {
        return { message: 'La quantité invalide' };
    }
    if (quantity === 0) {
        return { message: 'La quantité ne peut pas être zéro' };
    }

    // TODO Utiliser le service pour ajouter un stock !
    console.log('Gestion de stock -> Id : ' + productId + ', Quantité : ' + quantity);

    // redirect('/stock');
    return {
        message: 'Stock ajouter !'
    }
}