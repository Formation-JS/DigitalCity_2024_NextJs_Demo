'use client';

import { ProductFormState, addNewProduct } from '@/actions/product.action';
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import { useActionState } from 'react';

export default function ProductAddForm() {

    // const demoRemi = async (data: FormData) => {
    //     'use server';
    //     console.log(data);
    // };

    const initialState : ProductFormState = { values: null, errors: null, message: null}
    const [state, formAction] = useActionState(addNewProduct, initialState);

    return (
        <form action={formAction} className='flex flex-col gap-1'>
            <div className='flex flex-row'>
                <label className='basis-20' htmlFor=''>Label : </label>
                <input className='border-gray-400 border-2 p-0.5 rounded'
                    type='text' name='label' defaultValue={state.values?.get('label')?.toString()} />
                {state.errors?.label && (
                    <span>{state.errors?.label?.join(', ')}</span>
                )}
            </div>
            <div className='flex flex-row'>
                <label className='basis-20' htmlFor=''>Marque : </label>
                <input className='border-gray-400 border-2 p-0.5 rounded'
                    type='text' name='marque' defaultValue={state.values?.get('marque')?.toString()} />
                {state.errors?.marque && (
                    <span>{state.errors?.marque?.join(', ')}</span>
                )}
            </div>
            <div className='flex flex-row'>
                <label className='basis-20' htmlFor=''>Prix : </label>
                <input className='border-gray-400 border-2 p-0.5 rounded'
                    type='number' step={0.01} name='price' defaultValue={state.values?.get('price')?.toString()} />
                {state.errors?.price && (
                    <span>{state.errors?.price?.join(', ')}</span>
                )}
            </div>
            <div>
                <SubmitButton name='Ajouter' />
            </div>
        </form>
    );
}