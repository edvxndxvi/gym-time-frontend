import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, username, name, password } = await request.json();

    const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, username, name, password }),
    });

    if (!response.ok) {
        return NextResponse.json({ error: "Erro ao criar conta." }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
}