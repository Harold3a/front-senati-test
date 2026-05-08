export type User = {
    username: string;
    password: string;
    email: string;
}

export type RegisterForm = Pick<User, "username" | "email"> & {
    password: string;
    repeat_password: string;
};