import { loginRequest } from "@/http/login";

export async function loginAction(
    email: string,
    password: string,
    onSucces: (token: string) => void,
    onError: (message: string) => void
){
    try{
        const data = await loginRequest({email, password});
        onSucces(data.token);
    } catch(err: any) {
        onError(err.message || "Erro ao fazer login.");
    }
}