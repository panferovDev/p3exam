export type UserSubmitType = {
    name: string;
    password: string;
    email: string;
};

export type UserType = {
    id: number;
    name: string;
    email: string;
};


export type UserStateType = 
| {status: 'idle'}
| {status: 'loading'}
| {status: 'success'; user: UserType}