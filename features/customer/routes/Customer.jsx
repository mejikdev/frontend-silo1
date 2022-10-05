import { Box, Link as NativeLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useGetCustomers } from "../../../api/features/customer";

import { Button } from "../../../components/common/Button";
import { CustomTable } from "../../../components/Table";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "agentName",
    headerName: "Agent Name",
    width: 300,
  },
];

export const Customer = React.memo(function Customer() {
  const { data } = useGetCustomers();

  const rows = React.useMemo(() => {
    if (data?.length) {
      return data.map((item, index) => ({ no: index + 1, ...item }));
    }

    return [];
  }, [data]);

  return (
    <Stack sx={{ p: 4 }}>
      <Stack
        sx={{ mb: 2 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">Customer</Typography>
        <Link href="/customer/add">
          <NativeLink>
            <Button variant="contained" size="large">
              Add
            </Button>
          </NativeLink>
        </Link>
      </Stack>
      <Box sx={{ height: "527px" }}>
        <CustomTable columns={columns} rows={rows ?? []} pageSize={8} />
      </Box>
    </Stack>
  );
});
