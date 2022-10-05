import { useQuery } from "@tanstack/react-query";

import { axios } from "../../../lib/axios";

export const getAgents = () => axios.get(`/agents`).then((res) => res.data);

export const useGetAgents = () => useQuery(["getAgents"], () => getAgents());
