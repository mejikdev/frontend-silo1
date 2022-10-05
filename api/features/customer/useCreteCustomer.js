import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axios } from "../../../lib/axios";

export const createCustomer = (body) =>
  axios.post(`/customers`, body).then((res) => res.data);

export const useCreateCustomer = (options) => {
  const queryClient = useQueryClient();

  const mutationOptions = {
    mutationKey: ["createCustomer"],
    onSettled: () => {
      queryClient.invalidateQueries(["getCustomers"]);
    },
    ...options,
  };

  return useMutation(
    ["createCustomer"],
    (variables) => createCustomer(variables),
    mutationOptions
  );
};
