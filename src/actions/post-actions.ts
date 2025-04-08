"use server";

const API_URL = "http://localhost:8080/posts";

export async function getPosts(){
    const response = await fetch(API_URL);
    return response.json();
}

export async function createPost(initialState: any, formData: FormData){
    const data = {
        user: '',
        urlImage: '',
        content:  formData.get('content'),
        date: new Date().toISOString(),
        likes: 0,
        comments: 0,
        shares: 0
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(API_URL, options)
}