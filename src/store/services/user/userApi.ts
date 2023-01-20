import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GetUserByNameQueryParams, User, Users } from ".";

const baseUrl = "http://localhost:4000";
const usersUrl = "users";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getAllUsers: build.query<Users, null>({
            query: () => usersUrl,
        }),
        getUserByName: build.query<User, GetUserByNameQueryParams>({
            query: ({ name }) => `${usersUrl}?name=${name}`,
        }),
    }),
});

export const { useGetAllUsersQuery, useGetUserByNameQuery } = userApi;
