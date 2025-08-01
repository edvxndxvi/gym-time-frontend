interface User {
    name: string;
    username: string;
    profilePicURL: string;
}

interface Post {
    id: number;
    user: User;
    urlImage: string;
    content:  string;
    date: string; 
    likes: number;
    comments: number;
    shares: number
}
