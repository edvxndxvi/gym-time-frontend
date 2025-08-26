'use server';

import { loginRequest } from "@/http/login";
import { signUpRequest } from "@/http/signup";

export async function loginAction(
    email: string,
    password: string,
    onSuccess: (token: string) => void,
    onError: (message: string) => void
){
    try{
        const data = await loginRequest({email, password});
        onSuccess(data.token);
    } catch(err: any) {
        onError(err.message || "Erro ao fazer login.");
    }
}

export async function signUpAction(
    email: string,
    password: string,
    name: string,
    username: string,
    onSuccess: (token: string) => void,
    onError: (message: string) => void
){
    try{
        await signUpRequest({email, password, name, username});

        const data = await loginRequest({email, password});
        onSuccess(data.token);
    } catch(err: any){
        onError(err.message || "Erro ao criar conta.");
    }
}