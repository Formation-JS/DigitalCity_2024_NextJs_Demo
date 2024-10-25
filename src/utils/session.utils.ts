'use server';

import { getIronSession } from 'iron-session';
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from 'next/headers';

export type SessionData = {
    data?: {
        email: string;
        token: string;
    }
}

export async function getSession() {
    noStore()

    const sessionCookie = await cookies();

    const session = getIronSession<SessionData>(sessionCookie, {
        cookieName: process.env.SESSION_COOKIE!,
        password: process.env.SESSION_PASSWORD!
    })

    return session;
}