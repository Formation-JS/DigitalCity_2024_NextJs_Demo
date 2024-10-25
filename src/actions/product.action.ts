'use server';

import { createProduct } from '@/services/product.service';
import { ProdutFormData } from '@/types/product';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// Le validateur du formulaire
const ProductSchema = z.object({
    id: z.number(),
    label: z.string()
        .min(1, { message: 'Un label est necessaire' }),
    marque: z.string()
        .min(1, { message: 'Une marque est necessaire' }),
    price: z.coerce
        .number()
        .min(1, { message: 'Un prix est obligatoire' })
        .positive({ message: 'Le prix doit être positif' })
});

const CreateProductSchema = ProductSchema.omit({ id: true });

// Le state de l'action form
export type ProductFormState = {
    values: FormData | null;
    errors: {
        label?: string[] | undefined;
        marque?: string[] | undefined;
        price?: string[] | undefined;
    } | null;
    message: string | null;
};

export async function addNewProduct(state: ProductFormState, formData: FormData): Promise<ProductFormState> {

    // Validation
    /*
    const fields = CreateProductSchema.safeParse({
        label: formData.get('label'),
        marque: formData.get('marque'),
        price: formData.get('price')
    });
    */
    const fields = CreateProductSchema.safeParse(Object.fromEntries(formData.entries()));

    // Message d'erreur si les champs sont invalides
    if (!fields.success) {
        console.log(fields.error);
        return {
            values: formData,
            errors: fields.error.flatten().fieldErrors,
            message: 'Champs invalide (╯°□°）╯︵ ┻━┻'
        };
    }

    // Object à sauvé en DB (Mapping)
    const product: ProdutFormData = {
        ...fields.data
    };

    // Utilisation du service
    try {
        await createProduct(product);
        console.log('Produit ajouté !');
    }
    catch (errors) {
        console.log(errors);
        return {
            values: formData,
            errors: null,
            message: 'Erreur lors de l\'envoi vers l\'API'
        };
    }

    // Navigation vers la page des produits
    redirect('/product');
}