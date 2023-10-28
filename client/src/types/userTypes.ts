export type UserSubmitType = {
    name?: string;
    password: string;
    email: string;
};

export type UserResponseType = {
    id: number;
    name: string;
    email: string;
};



export type UserStateType = 
| {status: 'idle'}
| {status: 'loading'}
| {status: 'success'; user: UserResponseType}