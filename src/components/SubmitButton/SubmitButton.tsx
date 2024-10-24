'use client';

import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
    name?: string;
}

export default function SubmitButton({name = 'Valider'}: SubmitButtonProps) {

    const formStatus = useFormStatus();
    console.log(formStatus.pending);

    return (
        <button className='bg-purple-200 w-fit px-2 py-1 rounded-xl text-red-800 disabled:bg-purple-800 disabled:text-white'
            type='submit' disabled={formStatus.pending} >
            {name}
        </button>
    );
} 