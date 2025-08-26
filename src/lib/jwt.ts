import { type JWTPayload, jwtVerify } from "jose";

export interface UserPayload extends JWTPayload {
    sub: string;
    iss: string;
    exp: number;
}

// Validar o JWT e retornar o payload(dados do user dentro do jwt)
export async function verifyJWT(token: string): Promise<UserPayload | null> {
    try{
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const {payload} = await jwtVerify(token, secret);
        return payload as UserPayload;
    } catch(error){
        console.error("Invalid JWT: ", error);
        return null
    }
}

// Validar JWT se token é válido ou não
export async function isValidJWT(token:string): Promise<boolean> {
    try{
        if(!token || typeof token !== "string") return false;

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret, {
            algorithms: ["HS256"],
        });

        return true
    } catch{
        return false
    }
}