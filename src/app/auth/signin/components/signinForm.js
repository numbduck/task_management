'use client';

import {
    Button, PasswordInput, TextInput,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function LoginForm() {
    const router = useRouter();
    const [signInLoading, setSignInLoading] = useState();
    const defaultValues = {
        username: '',
        password: '',
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({ defaultValues });

    const formSubmit = async (data) => {

        const response = await fetch("/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem("token", token); // Save token in localStorage
            router.push("/tasks"); // Redirect to protected page
        } else {
            alert('Invalid credentials')
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <form
            className='w-[20rem] space-y-3 mt-3'
            onSubmit={handleSubmit(formSubmit)}
        >
            <Controller
                control={control}
                name='username'
                rules={{
                    required: 'Username is required',
                }}
                render={({ field }) => (
                    <TextInput
                        label='Username'
                        radius='lg'
                        placeholder='Enter username'
                        classNames={{ input: '!h-11', label: 'ml-2', error: '!ml-2' }}
                        error={errors?.username?.message ?? ''}
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name='password'
                rules={{
                    required: 'Password is required',
                }}
                render={({ field }) => (
                    <PasswordInput
                        label='Password'
                        radius='lg'
                        placeholder='Enter Password'
                        classNames={{ input: '!h-11', label: 'ml-2', error: '!ml-2' }}
                        error={errors?.password?.message ?? ''}
                        {...field}
                    />
                )}
            />

            <Button
                variant='filled'
                type='submit'
                radius='lg'
                classNames={{ root: '!w-full !mt-5' }}
                loading={signInLoading}
            >
                Sign in
            </Button>
        </form>
    );
}
