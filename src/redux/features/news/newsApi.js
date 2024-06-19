import { baseApi } from "@/redux/baseApi/baseApi";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchNews: builder.query({
      query: () =>
        `everything?q=tesla&from=2024-05-19&sortBy=publishedAt&apiKey=${
          import.meta.env.VITE_APP_NEWS_API_KEY
        }`,
    }),
  }),
});

export const { useFetchNewsQuery } = newsApi;
