export async function loginRequest({email, password}: {email: string, password: string}){
    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
        throw new Error("Email ou senha inválidos.");
    }

    return response.json();
}