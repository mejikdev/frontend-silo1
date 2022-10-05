import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axios } from "../../../lib/axios";

export const createAgent = (body) =>
  axios.post(`/agents`, body).then((res) => res.data);

export const useCreateAgent = (options) => {
  const queryClient = useQueryClient();

  const mutationOptions = {
    mutationKey: ["createAgent"],
    onSettled: () => {
      queryClient.invalidateQueries(["getAgents"]);
    },
    ...options,
  };

  return useMutation(
    ["createAgent"],
    (variables) => createAgent(variables),
    mutationOptions
  );
};
