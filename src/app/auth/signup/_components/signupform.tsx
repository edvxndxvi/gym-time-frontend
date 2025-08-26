"use client";

import Image from "next/image"
import logo from "../../../../../public/logo-gymtime.svg"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUpAction } from "@/actions/auth";
import { setAuthCookie } from "@/lib/auth";

export default function SignUpForm() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function validateStep1(){
        if (!email || !password) return "Preencha todos os campos.";
        if (!email.includes("@")) return "Email inválido.";
        return null;
    }

    function validateStep2(){
        if (!name || !username) return "Preencha todos os campos.";
        if (name.trim().length < 2) return "Nome precisa ter pelo menos 2 caracteres.";
        if (username.trim().length < 4) return "O usuário precisa ter pelo menos 4 caracteres.";
        return null;
    }

    function handleNextStep() {
        const validationError = validateStep1();
        if (validationError) {
            setError(validationError);
            return;
        }
        setStep(2);
        setError("");
    }

    async function handleCreateAccount(event: React.FormEvent) {
        event.preventDefault();

        const validationError = validateStep2();
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsLoading(true);

        signUpAction(
            email,
            password,
            username,
            name,
            (token) =>{
                setAuthCookie(token);
                setIsLoading(false);
                router.push("/feed")
            },
            (message) =>{
                setError(message);
                setIsLoading(false);
            }
        )

    }


    return (
        <div className="max-w-[350px] w-full">
            {step === 1 && (
                <div>
                    <div className="flex flex-col items-center gap-2 mb-8">
                        <Image src={logo} alt="Logo GymTime" width={64} height={64} />
                        <h1 className="text-2xl font-medium">Bem-vindo ao GymTime</h1>
                        <p className="text-gray-500">Crie sua conta e acesse o GymTime</p>
                    </div>
                    {error && <p className="text-red-400 text-center mb-2">{error}</p>}
                    <div className="flex flex-col gap-5 text-base">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium">E-mail</label>
                            <input type="email" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium">Senha</label>
                            <input type="password" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="bg-white hover:bg-gray-200 p-1.25 text-black rounded-sm" onClick={handleNextStep}>Criar conta</button>
                        <p className="text-center">Já possui conta? <Link href="/auth/login" className="underline">Fazer login</Link></p>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div>
                    <div className="flex flex-col items-center gap-2 mb-8">
                        <Image src={logo} alt="Logo GymTime" width={64} height={64} />
                        <h1 className="text-2xl font-medium">Informações de Perfil</h1>
                        <p className="text-gray-500">Para continuar, informe suas informações.</p>
                    </div>
                    {error && <p className="text-red-400 text-center mb-2">{error}</p>}
                    <div className="flex flex-col gap-5 text-base">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="text" className="font-medium">Nome</label>
                            <input type="text" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm" value={name} onChange={(e) => setName(e.target.value)} minLength={2}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium">Usuário</label>
                            <input type="text" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm" value={username} onChange={(e) => setUsername(e.target.value)} minLength={4}/>
                        </div>
                        <button type="submit" className="bg-white hover:bg-gray-200 p-1.25 text-black rounded-sm" onClick={handleCreateAccount} disabled={isLoading} >Criar conta</button>
                    </div>
                </div>
            )}
        </div>
    );
}