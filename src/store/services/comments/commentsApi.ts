import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Comments, GetAllCommentsUserQueryParams } from ".";

const baseUrl = "http://localhost:4000"
const usersUrl = "users";
const commentsUrl = "comments"

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getAllCommentsUser: build.query<Comments, GetAllCommentsUserQueryParams>({
            query: ({userId}) => `${usersUrl}/${userId}/${commentsUrl}`
        })
    }),
});

export const { useGetAllCommentsUserQuery } = commentsApi;