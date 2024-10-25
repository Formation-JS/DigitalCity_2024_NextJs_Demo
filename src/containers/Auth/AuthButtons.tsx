'use client';

import Link from 'next/link';
import {
    UserPlusIcon as RegisterIcon,
    ArrowRightEndOnRectangleIcon as LoginIcon,
    ArrowRightStartOnRectangleIcon as LogoutIcon
} from '@heroicons/react/24/solid';
import { authLogoutAction, authSessionForClient } from '@/actions/auth.action';
import { useEffect, useState } from 'react';

export default function AuthButtons() {

    const [session, setSession] = useState<string | null>(null);

    const loadSession = async () => {
        const innerSession = await authSessionForClient();
        setSession(innerSession?.token ?? null);
    };

    useEffect(() => {
        loadSession();
        console.log('Remi !');
    });
    console.log('Session : ', session);

    return (
        <div className='flex flex-row gap-1 items-center'>
            {!session ? (
                <>
                    <Link href='/register'>
                        <RegisterIcon className='h-7'
                            title='Register' />
                    </Link>
                    <Link href='/login'>
                        <LoginIcon className='h-7'
                            title='Login' />
                    </Link>
                </>
            ) : (
                <button onClick={authLogoutAction}>
                    <LogoutIcon className='h-7'
                        title='Logout' />
                </button>
            )}
        </div>
    );
} 