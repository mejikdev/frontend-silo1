import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as React from "react";
import { useCreateAgent } from "../../../api/features/agent";

export const useAdd = () => {
  const methods = useForm();
  const router = useRouter();

  const { mutateAsync, isLoading } = useCreateAgent();

  const handleSubmit = React.useCallback(
    async (data) => {
      try {
        await mutateAsync(data);
        router.push("/employee");
      } catch (error) {
        console.log("failed to create employee", error);
      }
    },
    [mutateAsync, router]
  );

  const inputs = React.useMemo(
    () => [
      {
        name: "name",
        label: "Name",
        placeholder: "Agent fullname",
        autoFocus: true,
        type: "text",
        validation: {
          required: {
            value: true,
            message: "Agent name is required!",
          },
        },
      },
    ],
    []
  );

  return {
    inputs,
    isLoading,
    methods,
    handleSubmit,
  };
};
