export type UserData = {
    id: number;
    name: string;
    avatar?: { path: string };
    role: {id: number, name: string};
    access_token: string;
    token_type: string;
    expires_at: string;
}