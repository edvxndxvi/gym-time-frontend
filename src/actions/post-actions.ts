"use server";


type State = {
  message?: string;
};

const API_URL = "http://localhost:8080/posts";

export async function getPosts() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createPost(state: State, formData: FormData): Promise<State> {
  const data = {
    user: "edvxndxvi",
    urlImage: "",
    content: formData.get("content"),
    date: new Date().toISOString().slice(0, 10), 
    likes: 0,
    comments: 0,
    shares: 0
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      return { message: "Erro ao criar post." };
    }

    return { message: "Post criado com sucesso!" };

  } catch (error) {
    return { message: "Erro na conexão com o servidor." };
  }
}
