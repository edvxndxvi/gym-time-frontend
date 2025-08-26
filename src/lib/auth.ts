import { cookies } from 'next/headers';
export async function setAuthCookie(token: string): Promise<void> {
    const cookiesStore = await cookies();
    cookiesStore.set('auth-token', token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    });
}