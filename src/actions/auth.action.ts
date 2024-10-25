'use server';

import { redirect } from 'next/navigation';

export type AuthFormState = {
    message: string | null;
};

export async function authRegisterAction(state: AuthFormState, formData: FormData) : Promise<AuthFormState> {
    const data = {
        email: formData.get('email')?.toString() ?? '',
        password: formData.get('email')?.toString() ?? '',
        confirm: formData.get('email')?.toString() ?? ''
    };

    // Validation → Monde des bisounous
    if (!data.email || !data.password || data.password !== data.confirm) {
        return {
            message: 'Donnée invalide !'
        };
    }

    // TODO Appeler le service

    // TODO Créer la session

    // Redirection vers la page d'acceuil
    redirect('/');
} 

export async function authLoginAction(state: AuthFormState, formData: FormData) : Promise<AuthFormState> {
    const data = {
        email: formData.get('email')?.toString() ?? '',
        password: formData.get('email')?.toString() ?? ''
    };

    // Validation → Monde des bisounous
    if (!data.email || !data.password) {
        return {
            message: 'Donnée invalide !'
        };
    }

    // TODO Check le compte (via le service)

    // TODO Créer la session

    // Redirection vers la page d'acceuil
    redirect('/');
} 