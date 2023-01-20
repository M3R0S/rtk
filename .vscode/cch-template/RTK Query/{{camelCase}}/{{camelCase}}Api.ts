import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {  } from ".";

const baseUrl = "http://localhost:4000"

export const {{camelCase}}Api = createApi({
    reducerPath: "{{camelCase}}Api",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        
    }),
});

export const {  } = {{camelCase}}Api;