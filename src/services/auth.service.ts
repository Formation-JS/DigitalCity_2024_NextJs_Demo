'use server';

type AuthData = {
    "accessToken": string;
}

export async function userRegister(email: string, password: string) {
    const response = await fetch('http://localhost:4242/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data : AuthData = await response.json();
    return data.accessToken;
}

export async function userLogin(email: string, password: string) {
    const response = await fetch('http://localhost:4242/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data : AuthData = await response.json();
    return data.accessToken;
}