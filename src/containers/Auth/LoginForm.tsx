'use client';

import { authLoginAction } from '@/actions/auth.action';
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import { useActionState, useId } from 'react';

export default function LoginForm() {

    const inputId = useId();
    const [state, formAction] = useActionState(authLoginAction, { message: null});

    return (
        <form action={formAction} className='flex flex-col gap-1'>
            <div className='flex flex-row'>
                <label className='basis-28' htmlFor={inputId + '-email'}>Email : </label>
                <input className='border-gray-400 border-2 p-0.5 rounded'
                    type="email" name="email" id={inputId + '-email'} />
            </div>
            <div className='flex flex-row'>
                <label className='basis-28' htmlFor={inputId + '-pwd'}>Mot de passe : </label>
                <input className='border-gray-400 border-2 p-0.5 rounded'
                    type="password" name="password" id={inputId + '-pwd'} />
            </div>
            <div>
                <SubmitButton name='Se connecter' />
                {state.message && (
                    <span className='mr-2 text-red-600'>{state.message}</span>
                )}
            </div>
        </form>
    );
}