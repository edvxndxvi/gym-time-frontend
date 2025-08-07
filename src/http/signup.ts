interface SignUpData{
    email: string, 
    password: string, 
    name: string, 
    username: string
}

export async function signUpRequest(data: SignUpData){
    const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Erro ao criar conta.");
    }
    
    return response.json;
}