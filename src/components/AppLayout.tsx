import { AppShell, Box } from "@mantine/core";
import React from "react";
import Header from "./Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      h="100vh"
      bg="white"
      padding={0}
      px="md"
      m="auto"
      maw="600px"
      layout="alt"
      header={<Header />}
    >
      <Box my="10vh">{children}</Box>
    </AppShell>
  );
};

export default AppLayout;
