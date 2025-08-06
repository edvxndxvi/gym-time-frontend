"use client";
import Image from "next/image"
import logo from "../../../../../public/logo-gymtime.svg"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        try{
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                throw new Error("Email ou senha inválidos.");
            }

            const data = await response.json();
            
            document.cookie = `token=${data.token}; path=/;`;
            router.push("/feed");
        }catch(err: any){
            setError(err.message || "Erro ao fazer login.");
        }
    }

    return (
        <form className="" onSubmit={handleLogin}>
            <div className="flex flex-col items-center gap-2 mb-8">
                <Image src={logo} alt="Logo GymTime" width={64} height={64} />
                <h1 className="text-2xl font-medium">Bem-vindo de volta ao GymTime</h1>
                <p className="text-gray-500">Coloque seu e-mail ou usuário para entrar</p>
            </div>
            {error && <p className="text-red-400 text-center mb-2">{error}</p>}
            <div className="flex flex-col gap-5 text-base">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium">E-mail ou Usuário</label>
                    <input type="email" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label htmlFor="email" className="font-medium">Senha</label>
                        <a href="#" className="hover:underline">Esqueceu sua senha?</a>
                    </div>
                    <input type="password" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="bg-white p-1.25 text-black rounded-sm">Entrar</button>
                <p className="text-center">Não possui conta? <Link href="/auth/signup" className="underline">Cadastre-se</Link></p>
            </div>
        </form>
    );
}