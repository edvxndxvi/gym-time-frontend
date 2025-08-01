import Image from "next/image"
import logo from "../../public/logo-gymtime.svg"
import Link from "next/link";

export default function LoginForm() {
    return (
        <form className="">
            <div className="flex flex-col items-center gap-2 mb-8">
                <Image src={logo} alt="Logo GymTime" width={64} height={64} />
                <h1 className="text-2xl font-medium">Bem-vindo de volta ao GymTime</h1>
                <p className="text-gray-500">Coloque seu e-mail ou usuário para entrar</p>
            </div>
            <div className="flex flex-col gap-5 text-base">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium">E-mail ou Usuário</label>
                    <input type="text" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label htmlFor="email" className="font-medium">Senha</label>
                        <a href="#" className="hover:underline">Esqueceu sua senha?</a>
                    </div>
                    <input type="password" className="bg-[#18181B] border border-gray-500 p-1 pl-2 rounded-sm"/>
                </div>
                <button className="bg-white p-1.25 text-black rounded-sm">Entrar</button>
                <p className="text-center">Não possui conta? <Link href="/signup" className="underline">Cadastre-se</Link></p>
            </div>
        </form>
    );
}