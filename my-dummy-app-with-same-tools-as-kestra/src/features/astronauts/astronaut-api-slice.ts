import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const DOGS_API_KEY = 'cbsabjkdsan-asdjlkjdsal-asdjldsajl';

// const astronaut_url = "https://springastronautsboot.herokuapp.com/api/v1/astronauts";

interface Astronaut{
    astronaut_id: number,
    name: string,
    image: string,
    slug: string,
    personal_data: string,
    description: string,
    service: string,
    category: {name: string, created: string, updated: string, id:string},
    created: string,
    updated: string
}

export const astronautApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://springastronautsboot.herokuapp.com/api/v1',
        // prepareHeaders(headers){
        //     headers.set('x-api-key', DOGS_API_KEY);
        //     return headers;
        // }
    }),
    endpoints(builder){
        return {
            fetchAstronauts: builder.query< Astronaut[], number | void >({
                query(limit = 10){
                    return `/astronauts`;
                }
            })
        }
    }
});


export const { useFetchAstronautsQuery} = astronautApiSlice;