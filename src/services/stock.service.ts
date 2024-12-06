'use server';

import { Stock } from '@/types/stock';
import { connection } from 'next/server';

export async function addStock(productId: number, quantity: number) {

    const movementDate = new Date().toISOString();

    await fetch('http://localhost:4242/stocks', {
        method: 'POST',
        body: JSON.stringify({ productId, quantity, movementDate }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function fetchStock(offset: number, limit:number) {
    await connection();

    //! Ne pas faire ceci en prod! (╯°□°）╯︵ ┻━┻
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Récuperation des données depuis l'API
    const response = await fetch(`http://localhost:4242/stocks?_start=${offset}&_limit=${limit}`);
    const data : Stock[] = await response.json();

    return data;
}

export async function fetchStockCount() {
    await connection();
    
    const response = await fetch('http://localhost:4242/stocks?_start=0&_limit=0');
    return parseInt(response.headers.get('X-Total-Count') ?? '0');
}