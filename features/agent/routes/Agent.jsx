import { Box, Link as NativeLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useGetAgents } from "../../../api/features/agent";

import { Button } from "../../../components/common/Button";
import { CustomTable } from "../../../components/Table";

const columns = [
  { field: "no", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
];

export const Agent = React.memo(function Agent() {
  const { data } = useGetAgents();

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
        <Typography variant="h4">Agent</Typography>
        <Link href="/agent/add">
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
