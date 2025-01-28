'use client'

import { useEffect } from 'react';
import LoginForm from './components/signinForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            router.push("/tasks"); // Redirect to login if no token
        }
    }, []);

    return (
        <div className='w-full flex flex-col justify-center items-center h-screen'>
            <div>
                <h1 className='text-3xl font-semibold'>Sign in</h1>
                <p className='text-black text-base mt-1'>
                    to start using TasKING.
                </p>
            </div>

            <LoginForm />
        </div>
    );
}
