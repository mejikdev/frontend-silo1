import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as React from "react";
import { useCreateCustomer } from "../../../api/features/customer";
import { useGetAgents } from "../../../api/features/agent";

export const useAdd = () => {
  const methods = useForm();
  const router = useRouter();

  const { data: agents } = useGetAgents();
  const { mutateAsync, isLoading } = useCreateCustomer();

  const handleSubmit = React.useCallback(
    async (data) => {
      try {
        await mutateAsync(data);
        router.push("/customer");
      } catch (error) {
        console.log("failed to create customer", error);
      }
    },
    [mutateAsync, router]
  );

  const inputs = React.useMemo(
    () => [
      {
        name: "name",
        label: "Name",
        placeholder: "Customer fullname",
        autoFocus: true,
        type: "text",
        validation: {
          required: {
            value: true,
            message: "Customer name is required!",
          },
        },
      },
      {
        name: "agentId",
        label: "Agent",
        placeholder: "Select agent",
        type: "select",
        options: [...(agents ?? [])].map((item) => ({
          value: item.id,
          label: item.name,
        })),
        validation: {
          required: {
            value: true,
            message: "Customer name is required!",
          },
        },
      },
    ],
    [agents]
  );

  return {
    inputs,
    isLoading,
    methods,
    handleSubmit,
  };
};
