'use server';

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { connection } from 'next/server';

export type SessionData = {
    data?: {
        email: string;
        token: string;
    }
}

export async function getSession() {
    await connection();

    const sessionCookie = await cookies();

    const session = getIronSession<SessionData>(sessionCookie, {
        cookieName: process.env.SESSION_COOKIE!,
        password: process.env.SESSION_PASSWORD!
    })

    return session;
}