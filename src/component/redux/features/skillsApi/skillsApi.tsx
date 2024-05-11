import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSkill: builder.mutation({
      query: (postSkill) => ({
        url: "/create-skills",
        method: "POST",
        body: postSkill,
      }),
    }),

    getSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
    }),
  }),
});
export const { usePostSkillMutation, useGetSkillsQuery } = volunteerApi;
