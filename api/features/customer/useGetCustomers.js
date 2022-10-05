import { useQuery } from "@tanstack/react-query";

import { axios } from "../../../lib/axios";

export const getCustomers = () =>
  axios.get(`/customers`).then((res) => res.data);

export const useGetCustomers = () =>
  useQuery(["getCustomers"], () => getCustomers());
