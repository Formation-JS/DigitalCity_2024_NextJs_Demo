'use server';

import { Product, ProductWithStock } from '@/types/product';


type ProductQuantity = { product: ProductWithStock, quantity: number; };

async function fetchProductsAndStockQuantity() {
    const URL_PRODUCT_WITH_STOCK = 'http://localhost:4242/products?_embed=stocks';

    //Recuperation des données via l'API
    const response = await fetch(URL_PRODUCT_WITH_STOCK);
    const data: ProductWithStock[] = await response.json();

    // Traitement (Cas réel -> bah... dans l'api quoi)
    const result: ProductQuantity[] = data.map(elem => ({
        product: elem,
        quantity: elem.stocks.reduce((acc, stock) => acc + stock.quantity, 0)
    }));

    return result;
}

//! Obtenir les produits avec le plus de stock
export async function fetchProductsWithHigherStock() {

    //! Ne pas faire ceci en prod! (╯°□°）╯︵ ┻━┻
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Récuperation des produits avec le stock
    const result = await fetchProductsAndStockQuantity();
    const maxQuantity = Math.max(...result.map(r => r.quantity));
    return {
        products: result.filter(r => r.quantity === maxQuantity).map(r => r.product),
        quantity: maxQuantity
    };
}

//! Obtenir les produits avec le moins de stock
export async function fetchProductsWithLowerStock() {

    //! Ne pas faire ceci en prod! (╯°□°）╯︵ ┻━┻
    await new Promise((resolve) => setTimeout(resolve, 1_500));

    // Récuperation des produits avec le stock
    const result = await fetchProductsAndStockQuantity();
    const minQuantity = Math.min(...result.map(r => r.quantity));

    return {
        products: result.filter(r => r.quantity === minQuantity).map(r => r.product),
        quantity: minQuantity
    };
}

//! Obtenir le dernier produit ajouté
export async function fetchLastProductAdded() {

    //! Ne pas faire ceci en prod! (╯°□°）╯︵ ┻━┻
    await new Promise((resolve) => setTimeout(resolve, 1_000));

    // Récuperation du dernier produit
    const response = await fetch('http://localhost:4242/products?_sort=id&_order=desc&_limit=1');
    const data: [Product?] = await response.json();

    return data[0] ?? null;
}

//? Ajouter un produit

//? Obtenir le detail d'un produit

//? Obtenir la liste des produit (pagination)