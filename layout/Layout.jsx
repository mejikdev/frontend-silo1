import { AppBar, Box, Link as NativeLink, Stack, Toolbar } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "../components/common/Button";
import { setCookie } from "../utils/cookie";

export const Layout = ({ children, title }) => {
  const pageTitle = title ? `${title}` : "My App";
  const router = useRouter();

  const selectedRoute = router.pathname.split("/")[1];

  const onLogout = React.useCallback(() => {
    setCookie("token", "");
    window.location.href = "/";
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Stack
        sx={{
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <AppBar
          sx={{
            background: "white",
          }}
          position="static"
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Button sx={{ color: "black" }} size="large">
                CRM
              </Button>
              <Link href="/customer" passHref>
                <NativeLink sx={{ textDecoration: "none" }}>
                  <Button size="large">Customer</Button>
                </NativeLink>
              </Link>
              <Link href="/agent" passHref>
                <NativeLink sx={{ textDecoration: "none" }}>
                  <Button size="large">Agent</Button>
                </NativeLink>
              </Link>
            </Box>
            <Button variant="contained" onClick={onLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Stack sx={{ overflow: "auto" }}>{children}</Stack>
      </Stack>
    </>
  );
};
