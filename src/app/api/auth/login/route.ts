import { NextResponse } from "next/server";


export async function POST(request: Request){
    const {email, password} = await request.json();

    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
        return NextResponse.json({error: "Email ou senha inválidos."}, {status: 401});
    }

    const data = await response.json()
    return NextResponse.json(data)
}