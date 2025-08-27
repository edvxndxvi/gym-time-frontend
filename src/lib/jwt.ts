'use server'
import { type JWTPayload, jwtVerify } from "jose";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export interface UserPayload extends JWTPayload {
    sub: string;
    iss: string;
    exp: number;
}

// Validar o JWT e retornar o payload(dados do user dentro do jwt) para requisições protegidas
export async function verifyJWT(token: string): Promise<UserPayload | null> {
    try{
        const secret = new TextEncoder().encode(process.env.SECRET_JWT);
        const {payload} = await jwtVerify(token, secret);
        return payload as UserPayload;
    } catch(error){
        console.error("Invalid JWT: ", error);
        return null
    }
}

export async function getUserFromToken(): Promise<UserPayload | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');
    if(!token) return null;
    
    try{
        console.log("Token: ", token.value);
        const payload: UserPayload = jwtDecode(token.value);
        return payload;
    }catch(error){
        console.log("Error decoding token: ", error);
        return null
    }
}

// Validar JWT se token é válido ou não
export async function isValidJWT(token:string): Promise<boolean> {
    try{
        if(!token || typeof token !== "string") return false;

        const secret = new TextEncoder().encode(process.env.SECRET_JWT);
        await jwtVerify(token, secret, {
            algorithms: ["HS256"],
        });
        return true
    } catch{
        return false
    }
}

