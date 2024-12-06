'use server';

import { userLogin, userRegister } from '@/services/auth.service';
import { getSession } from '@/utils/session.utils';
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

    // Service pour créer le compte
    const token = await userRegister(data.email, data.password);
    console.log('Register : ' + token);

    // Créer la session
    const session = await getSession();
    session.data = {
        token, email: data.email
    };
    await session.save();

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
    
    // Service pour se connecter
    const token = await userLogin(data.email, data.password);
    console.log('Login : ' + token);

    if(!token) {
        return {
            message: 'Crédential invalide !'
        };
    }

    // Créer la session
    const session = await getSession();
    session.data = {
        token, email: data.email
    };
    await session.save();

    // Redirection vers la page d'acceuil
    redirect('/');
} 

export async function authLogoutAction() {
    const session = await getSession();
    session.destroy();
}


export async function authSessionForClient() {
    const session = await getSession();
    return session.data;
}