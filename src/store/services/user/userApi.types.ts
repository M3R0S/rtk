export interface User {
    id: string;
    name: string;
    age: string;
}

export type Users = User[];

export interface GetUserByNameQueryParams {
    name: string;
}
