export interface Comment {
    id: string;
    userId: string;
    text: string;
}

export type Comments = Comment[]

export interface GetAllCommentsUserQueryParams {
    userId: string
}